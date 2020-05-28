import crypto from 'crypto';
import endpoints from './endpoints';
import {Credentials, RequestCreateWallet} from '../interfaces';

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

    private constructor() { }

    public static getInstance(): Configuration {
        if (!Configuration.instance) {
            Configuration.instance = new Configuration();
        }

        return Configuration.instance;
    }

    public static isCredentials() {
        const {X_Login = null, X_Trans_Key = null, secret = null, env = null} = Configuration.getInstance().credentials;
        return (X_Login && X_Trans_Key && secret && env && (env === Configuration.QA || env === Configuration.PROD));
    }

    public setCredentials(credentials: Credentials) {
        this.credentials = credentials;
    }

    public static getUri(endpoint: string) {
        if (
            endpoint === endpoints.CREATE_RECHARGE ||
            endpoint === endpoints.CREATE_PURCHASE ||
            endpoint === endpoints.CREATE_WITHDRAWAL ||
            endpoint === endpoints.CREATE_SEND
        ) {
            return {
                url: Configuration.getTransactionsUrl(),
                method: 'post',
            }
        }

        if (endpoint === endpoints.GET_TRANSACTIONS || endpoint === endpoints.GET_TRANSACTION) {
            return {
                url: Configuration.getTransactionsUrl(),
                method: 'get',
            }
        }

        if (endpoint === endpoints.GET_WALLETS || endpoint === endpoints.GET_WALLET) {
            return {
                url: Configuration.getWalletsUrl(),
                method: 'get',
            }
        }

        if (endpoint === endpoints.CREATE_WALLET)
            return {
                url: Configuration.getWalletsUrl(),
                method: 'post',
            }

        return {
            url: '',
            method: '',
        }
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

    public static prepareResult(hash: object, type: string) {
        switch(type) {
            case endpoints.CREATE_WALLET: {
                const {token} = <RequestCreateWallet> hash;
                return `token${token}`;
            }
            case endpoints.GET_WALLETS: {
                return '';
            }
            case endpoints.GET_WALLET: {
                return '';
            }
            case endpoints.GET_TRANSACTIONS: {
                return '';
            }
            case endpoints.GET_TRANSACTION: {
                return '';
            }
            case endpoints.CREATE_RECHARGE: {
                return '';
            }
            case endpoints.CREATE_PURCHASE: {
                return '';
            }
            case endpoints.CREATE_WITHDRAWAL: {
                return '';
            }
            case endpoints.CREATE_SEND: {
                return '';
            }
            default: {
                return '';
            }
        }
    }

    public static prepareHeaders(hash: object, type: string) {
        const {X_Login, X_Trans_Key, secret} = Configuration.instance.credentials;
        const X_Date = new Date().toISOString();
        const result = Configuration.prepareResult(hash, type);

        let signature: any = crypto.createHmac('sha256', secret);
        signature.update(`${X_Login}${X_Date}${result}`);
        signature = signature.digest('hex');

        return {
            headers: {
                "X-Date": X_Date,
                "X-Login": X_Login,
                "X-Trans-Key": X_Trans_Key,
                "Content-Type": "application/json",
                "Authorization": `V2-HMAC-SHA256, Signature: ${signature}`,
            },
        }
    }
}

export default Configuration;
