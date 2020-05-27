import crypto from 'crypto';
import {walletProvider} from '../../providers';
import BaseResource from './BaseResource';

class Wallet extends BaseResource {
    private uuid: string = '';
    private created_at: string = '';
    private is_master: boolean = false;
    private balances: object = {
        clp: 0,
    }

    public constructor(uuid: string = '') {
        super();
        this.uuid = uuid;
    }

    public get(uuid: string = '') {
        return this.promise(async (resolve: any, reject: any) => {
            const response: any = await walletProvider.getWallet(uuid);

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

    public all() {
        return this.promise(async (resolve: any, reject: any) => {
            const response: any = await walletProvider.getWallets();

            if (response.error) {
                reject(response.error);
            } else {

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

    public transactions() { }

    public recharge() { }

    public purchase() { }

    public withdrawal() { }

    public send() { }
}

export default Wallet;
