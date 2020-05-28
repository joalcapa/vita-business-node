import crypto from 'crypto';
import Base from './base';
import {walletProvider, transactionsProvider} from '../../../providers';

class Wallet extends Base {
    private created_at: string = '';
    private is_master: boolean = false;
    private balances: object = {
        clp: 0,
    }

    public constructor(uuid: string = '', created_at: string = '', is_master: boolean = false, balances: any = {clp: 0}) {
        super();

        this.uuid = uuid;
        this.created_at = created_at;
        this.is_master = is_master;
        this.balances = balances;
    }

    public get() {
        return this.promise(async (resolve: any, reject: any) => {
            const response: any = this.uuid ? await walletProvider.getWallet(this.uuid) : await walletProvider.getWallets();
            if (response.error) {
                reject(response.error);
            } else {
                if (this.uuid) {
                    const {wallet: {uuid, attributes: {created_at, is_master, balances}}} = response;
                    this.uuid = uuid;
                    this.created_at = created_at;
                    this.is_master = is_master;
                    this.balances = balances;
                    resolve(this);
                } else {
                    const wallets = response.wallets.map((wallet: any) => {
                        const {uuid, attributes: {created_at, is_master, balances}} = wallet;
                        return new Wallet(uuid, created_at, is_master, balances);
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
                const {wallet: {uuid, attributes: {created_at, is_master, balances}}} = response;
                this.uuid = uuid;
                this.created_at = created_at;
                this.is_master = is_master;
                this.balances = balances;
                resolve(this);
            }
        });
    }

    public transactions() {
        return this.promise(async (resolve: any, reject: any) => {
            const response: any = await transactionsProvider.getTransactions();

            if (response.error) {
                reject(response.error);
            } else {
                const {wallet: {uuid, attributes: {created_at, is_master, balances}}} = response;

                this.uuid = uuid;
                this.created_at = created_at;
                this.is_master = is_master;
                this.balances = balances;

                resolve(this);
            }
        });
    }

    public recharge(payload: object) {
        return this.createTransaction(async (resolve: any, reject: any) => {
            const response: any = await transactionsProvider.createRecharge({
                wallet: this.uuid,
                transactions_type: 'recharge',
                ...payload,
            });

            response.error ?
                reject(response.error) :
                resolve(response);
        });
    }

    public purchase(payload: object) {
        return this.createTransaction(async (resolve: any, reject: any) => {
            const response: any = await transactionsProvider.createRecharge({
                wallet: this.uuid,
                transactions_type: 'purchase',
                ...payload,
            });

            if (response.error) {
                reject(response.error);
            } else {
                const {transaction: {attributes: {sender_wallet: {balances}}}} = response;
                this.balances = balances;
                resolve(response);
            }
        });
    }

    public withdrawal(payload: object) {
        return this.createTransaction(async (resolve: any, reject: any) => {
            const response: any = await transactionsProvider.createRecharge({
                wallet: this.uuid,
                transactions_type: 'withdrawal',
                ...payload,
            });

            if (response.error) {
                reject(response.error);
            } else {
                const {transaction: {attributes: {sender_wallet: {balances}}}} = response;
                this.balances = balances;
                resolve(response);
            }
        });
    }

    public send(payload: object) {
        return this.createTransaction(async (resolve: any, reject: any) => {
            const response: any = await transactionsProvider.createRecharge({
                wallet: this.uuid,
                transactions_type: 'send',
                ...payload,
            });

            if (response.error) {
                reject(response.error);
            } else {
                const {transaction: {attributes: {sender_wallet: {balances}}}} = response;
                this.balances = balances;
                resolve(response);
            }
        });
    }
}

export default Wallet;
