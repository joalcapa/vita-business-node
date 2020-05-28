import crypto from 'crypto';
import {Credentials} from '../interfaces';

class Configuration {
    private static instance: Configuration;
    private credentials: Credentials = {
        X_Login: '',
        X_Trans_Key: '',
        secret: '',
        env: '',
    };

    static QA_URL: string = 'https://vita-wallet-api-qa-2.appspot.com/api/businesses';
    static PROD_URL: string = 'https://api.vitawallet.io/api/businesses';
    static QA: string = 'qa';
    static PROD: string = 'prod';

    static CREATE_WALLET: string = 'WALLETS/CREATE_WALLET';
    static GET_WALLET: string = 'WALLETS/GET_WALLET';
    static GET_WALLETS: string = 'WALLETS/GET_WALLETS';

    static GET_TRANSACTIONS: string = 'TRANSACTIONS/GET_TRANSACTIONS';
    static GET_TRANSACTION: string = 'TRANSACTIONS/GET_TRANSACTION';
    static CREATE_RECHARGE: string = 'TRANSACTIONS/CREATE_RECHARGE';
    static CREATE_PURCHASE: string = 'TRANSACTIONS/CREATE_PURCHASE';
    static CREATE_WITHDRAWAL: string = 'TRANSACTIONS/CREATE_WITHDRAWAL';
    static CREATE_SEND: string = 'TRANSACTIONS/CREATE_SEND';

    private constructor() { }

    public static getInstance(): Configuration {
        if (!Configuration.instance) {
            Configuration.instance = new Configuration();
        }

        return Configuration.instance;
    }

    public static isCredentials() {
        const {X_Login = null, X_Trans_Key = null, secret = null, env = null} = Configuration.getInstance().credentials;
        return (X_Login && X_Trans_Key && secret && env && (env === 'qa' || env === 'prod'));
    }

    public setCredentials(credentials: Credentials) {
        this.credentials = credentials;
    }

    public static getUrl() {
        return Configuration.instance.credentials.env === Configuration.PROD ?
            Configuration.PROD_URL :
            Configuration.QA_URL;
    }

    public static getWalletsUrl() {
        return `${Configuration.getUrl()}/wallets`;
    }

    public static getTransactionsUrl() {
        return `${Configuration.getUrl()}/transactions`;
    }

    public static getPricesUrl() {
        return `${Configuration.getUrl()}/prices`;
    }

    public static getBanksUrl() {
        return `${Configuration.getUrl()}/banks`;
    }

    public static prepareResult(hash: any, type: string) {
        switch(type) {
            case Configuration.CREATE_WALLET: {
                const {token} = hash;
                return `token${token}`;
            }
            case Configuration.GET_WALLETS: {
                return '';
            }
            case Configuration.GET_WALLET: {
                return '';
            }
            case Configuration.GET_TRANSACTIONS: {
                return '';
            }
            case Configuration.GET_TRANSACTION: {
                return '';
            }
            case Configuration.CREATE_RECHARGE: {
                return '';
            }
            case Configuration.CREATE_PURCHASE: {
                return '';
            }
            case Configuration.CREATE_WITHDRAWAL: {
                return '';
            }
            case Configuration.CREATE_SEND: {
                return '';
            }
            default: {
                return '';
            }
        }
    }

    public static prepareHeaders(hash: any, type: string) {
        const {X_Login, X_Trans_Key, secret} = Configuration.instance.credentials;
        const X_Date = new Date().toISOString();
        const result = Configuration.prepareResult(hash, type);

        let signature: any = crypto.createHmac('sha256', secret);
        signature.update(`${X_Login}${X_Date}${result}`);
        signature = signature.digest('hex');

        return {
            "X-Date": X_Date,
            "X-Login": X_Login,
            "X-Trans-Key": X_Trans_Key,
            "Content-Type": "application/json",
            "Authorization": `V2-HMAC-SHA256, Signature: ${signature}`,
        }
    }
}

export default Configuration;
