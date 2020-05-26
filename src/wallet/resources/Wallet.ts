import crypto from 'crypto';
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

    public async create(token: string = '') {
        if (!token)
            token = crypto.randomBytes(64).toString('hex');

        try {
            const response = await walletProvider.createWallet(token);
            const {wallet: {uuid, attributes: {created_at, is_master, balances}}} = response;

            this.uuid = uuid;
            this.created_at = created_at;
            this.is_master = is_master;
            this.balances = balances;

        } catch (e) {

        }
    }

    public transactions() { }

    public recharge() { }

    public purchase() { }

    public withdrawal() { }

    public send() { }
}

export default Wallet;
