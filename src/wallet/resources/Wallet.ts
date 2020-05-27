import crypto from 'crypto';
import {EventEmitter} from "events";
import {walletProvider} from '../../providers';

class Wallet {
    private uuid: string = '';
    private created_at: string = '';
    private is_master: boolean = false;
    private balances: object = {
        clp: 0,
    }

    public constructor(uuid: string = '') {
        this.uuid = uuid;
    }

    public get() { }

    public create(token: string = '') {
        return new Promise(async (resolve, reject) => {
            if (!token)
                token = crypto.randomBytes(64).toString('hex');

            const response: any = await walletProvider.createWallet(token);

            if (response.error) {
                reject(new Error(JSON.stringify(response.error)));
            } else {
                const {wallet: {uuid, attributes: {created_at, is_master, balances}}} = response;

                this.uuid = uuid;
                this.created_at = created_at;
                this.is_master = is_master;
                this.balances = balances;

                resolve(response);
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
