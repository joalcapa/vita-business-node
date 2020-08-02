import crypto from 'crypto';
import Base from './base';
import {walletProvider, transactionsProvider} from '../../../providers';
import {RequestRecharge, RequestPurchase, RequestWithdrawal, RequestSend} from '../../../interfaces';

class Wallet extends Base {
    private created_at: string = '';
    private is_master: boolean = false;
    private token: string = '';
    private balances: object = {
        clp: 0,
    }

    public constructor(
        uuid: string = '',
        created_at: string = '',
        is_master: boolean = false,
        balances: any = {clp: 0},
        token: string = ''
    ) {
        super();

        this.uuid = uuid;
        this.created_at = created_at;
        this.is_master = is_master;
        this.balances = balances;
        this.token = token;
    }

    public getMaster() {
        return this.promise(async (resolve: any, reject: any) => {
            const response: any = await walletProvider.getWalletMaster();
            if (response.error) {
                reject(response.error);
            } else {
                const wallets = response.wallets.map((wallet: any) => {
                    const {uuid, attributes: {token, created_at, is_master, balances}} = wallet;
                    return new Wallet(uuid, created_at, is_master, balances, token);
                });
                resolve(wallets);
            }
        });
    }

    public get() {
        return this.promise(async (resolve: any, reject: any) => {
            const response: any = this.uuid ? await walletProvider.getWallet(this.uuid) : await walletProvider.getWallets();
            if (response.error) {
                reject(response.error);
            } else {
                if (this.uuid) {
                    const {wallet: {uuid, attributes: {token, created_at, is_master, balances}}} = response;
                    this.uuid = uuid;
                    this.token = token;
                    this.created_at = created_at;
                    this.is_master = is_master;
                    this.balances = balances;
                    resolve(this);
                } else {
                    const wallets = response.wallets.map((wallet: any) => {
                        const {uuid, attributes: {token, created_at, is_master, balances}} = wallet;
                        return new Wallet(uuid, created_at, is_master, balances, token);
                    });
                    resolve(wallets);
                }
            }
        });
    }

    public create(token: string = '') {
        return this.promise(async (resolve: any, reject: any) => {
            if (!token)
                token = crypto.randomBytes(64).toString('hex');
            const response: any = await walletProvider.createWallet(token);
            if (response.error) {
                reject(response.error);
            } else {
                const {wallet: {uuid, attributes: {token, created_at, is_master, balances}}} = response;
                this.uuid = uuid;
                this.created_at = created_at;
                this.is_master = is_master;
                this.balances = balances;
                this.token = token;
                resolve(this);
            }
        });
    }

    public transactions() {
        return this.promise(async (resolve: any, reject: any) => {
            const response: any = await transactionsProvider.getTransactions();
            response.error ?
                reject(response.error) :
                resolve(response.transactions);
        });
    }

    public recharge(request: RequestRecharge) {
        return this.createTransaction(async (resolve: any, reject: any) => {
            const response: any = await transactionsProvider.createRecharge({
                wallet: this.uuid,
                transactions_type: 'recharge',
                ...request,
            });

            response.error ?
                reject(response.error) :
                resolve(response);
        });
    }

    public send(request: RequestSend) {
        return this.createTransaction(async (resolve: any, reject: any) => {
            const response: any = await transactionsProvider.createSend({
                wallet: this.uuid,
                transactions_type: 'sent',
                ...request,
            });

            if (response.error) {
                reject(response.error);
            } else {
                const {transaction: {attributes: {sender_wallet: {balances}}}} = response;
                this.balances = balances;
                resolve(response.transaction);
            }
        });
    }

    public withdrawal(request: RequestWithdrawal) {
        return this.createTransaction(async (resolve: any, reject: any) => {
            const response: any = await transactionsProvider.createWithdrawal({
                wallet: this.uuid,
                transactions_type: 'withdrawal',
                ...request,
            });

            if (response.error) {
                reject(response.error);
            } else {
                const {transaction: {attributes: {sender_wallet: {balances}}}} = response;
                this.balances = balances;
                resolve(response.transaction);
            }
        });
    }

    public purchase(request: RequestPurchase) {
        return this.createTransaction(async (resolve: any, reject: any) => {
            const response: any = await transactionsProvider.createPurchase({
                wallet: this.uuid,
                transactions_type: 'purchase',
                ...request,
            });

            if (response.error) {
                reject(response.error);
            } else {
                const {transaction: {attributes: {sender_wallet: {balances}}}} = response;
                this.balances = balances;
                resolve(response.transaction);
            }
        });
    }
}

export default Wallet;
