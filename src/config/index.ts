import {createHmac} from 'crypto';
import endpoints from './endpoints';
import {Credentials, RequestCreateWallet} from '../interfaces';
import {RequestRechargeBusiness} from '../interfaces/requestRecharge';
import {RequestSendBusiness} from '../interfaces/requestSend';
import {RequestVitaSendBusiness} from '../interfaces/requestVitaSend';
import {RequestPurchaseBusiness} from '../interfaces/requestPurchase';
import {RequestWithdrawalBusiness} from '../interfaces/requestWithdrawal';
import RequestVitaUsers from '../interfaces/requestVitaUsers';
import RequestBanks from '../interfaces/requestBanks';
import RequestWallets from '../interfaces/requestWallets';
import RequestPrices from '../interfaces/RequestPrices';

class Configuration {
    private static instance: Configuration;
    private credentials: Credentials = {
        X_Login: '',
        X_Trans_Key: '',
        secret: '',
        env: '',
        isDevelopment: false,
    };

    static LOCAL_URL: string = 'http://127.0.0.1:3000/api/businesses';
    static QA_URL: string = 'https://api.qa.vitawallet.io/api/businesses';
    static PROD_URL: string = 'https://api.vitawallet.io/api/businesses';
    static STAGE_URL: string = 'https://api.stage.vitawallet.io/api/businesses';
    static LOCAL: string = 'local';
    static QA: string = 'qa';
    static PROD: string = 'prod';
    static STAGE: string = 'stage';

    private constructor() { }

    public static getInstance(): Configuration {
        if (!Configuration.instance) {
            Configuration.instance = new Configuration();
        }

        return Configuration.instance;
    }

    public static isCredentials() {
        const {X_Login = null, X_Trans_Key = null, secret = null, env = null} = Configuration.getInstance().credentials;
        return (X_Login && X_Trans_Key && secret && env && (
            env === Configuration.LOCAL ||
            env === Configuration.QA ||
            env === Configuration.STAGE ||
            env === Configuration.PROD
        ));
    }

    public static isDevelopment() {
        const {isDevelopment = false} = Configuration.getInstance().credentials;
        return isDevelopment;
    }

    public setCredentials(credentials: Credentials) {
        this.credentials = credentials;
    }

    public static getUri(endpoint: string, resource = '', params: {}) {
        if (
            endpoint === endpoints.CREATE_RECHARGE ||
            endpoint === endpoints.CREATE_PURCHASE ||
            endpoint === endpoints.CREATE_WITHDRAWAL ||
            endpoint === endpoints.CREATE_SEND ||
            endpoint === endpoints.CREATE_VITA_SEND
        ) {
            return {
                url: Configuration.getTransactionsUrl(),
                method: 'post',
            }
        }

        if (endpoint === endpoints.GET_TRANSACTIONS || endpoint === endpoints.GET_TRANSACTION) {
            return {
                url: Configuration.getTransactionsUrl(resource),
                method: 'get',
            }
        }

        if (endpoint === endpoints.GET_WALLETS || endpoint === endpoints.GET_WALLET) {
            let url = Configuration.getWalletsUrl(resource);
            const request = <RequestWallets> params;
            url = `${url}?${params.hasOwnProperty('page') ? `page=${request.page}&` : ''}${params.hasOwnProperty('count') ? `count=${request.count}&` : ''}${params.hasOwnProperty('is_master') ? `is_master=${request.is_master}` : ''}`;

            return {
                url,
                method: 'get',
            }
        }

        if (endpoint === endpoints.CREATE_WALLET) {
            return {
                url: Configuration.getWalletsUrl(),
                method: 'post',
            }
        }

        if (endpoint === endpoints.GET_BANKS) {
            const {iso_code} = <RequestBanks> params;
            return {
                url: `${Configuration.getBanksUrl()}?country=${iso_code}`,
                method: 'get',
            }
        }

        if (endpoint === endpoints.GET_PRICES) {
            const request = <RequestPrices> params;
            return {
                url: `${Configuration.getPricesUrl()}${request.uuid ? `?wallet_uuid=${request.uuid}` : ''}`,
                method: 'get',
            }
        }

        if (endpoint === endpoints.GET_VITA_EMAIL) {
            const request = <RequestVitaUsers> params;
            return {
                url: `${Configuration.getVitaUsersUrl()}?email=${request.email}`,
                method: 'get',
            }
        }

        if (endpoint === endpoints.GET_WITHDRAWAL_RULES) {
            return {
                url: Configuration.getWithdrawalRulesUrl(),
                method: 'get',
            }
        }

        return {
            url: '',
            method: '',
        }
    }

    public static getUrl() {
        switch (Configuration.instance.credentials.env) {
            case Configuration.PROD: {
                return Configuration.PROD_URL;
            }
            case Configuration.STAGE: {
                return Configuration.STAGE_URL;
            }
            case Configuration.QA: {
                return Configuration.QA_URL;
            }
            default: {
                return Configuration.LOCAL_URL;
            }
        }
    }

    public static getWalletsUrl(resource = '') {
        return `${Configuration.getUrl()}/wallets/${resource}`;
    }

    public static getTransactionsUrl(resource = '') {
        return `${Configuration.getUrl()}/transactions/${resource}`;
    }

    public static getPricesUrl() {
        return `${Configuration.getUrl()}/prices`;
    }

    public static getBanksUrl() {
        return `${Configuration.getUrl()}/banks`;
    }

    public static getVitaUsersUrl() {
        return `${Configuration.getUrl()}/vita_users`;
    }

    public static getWithdrawalRulesUrl() {
        return `${Configuration.getUrl()}/withdrawal_rules`;
    }

    public static prepareResult(hash: { [key: string]: any } = {}) {
        if (Object.keys(hash).length > 0) {
            return Object
                .keys(hash)
                .sort()
                .filter((key) => (hash[key]))
                .reduce((previousResult, key) =>
                    `${previousResult}${key}${hash[key]}`
                );
        }

        return '';
    }

    public static prepareHeaders(hash: object) {
        const {X_Login, X_Trans_Key, secret} = Configuration.instance.credentials;
        const X_Date = new Date().toISOString();
        const result = Configuration.prepareResult(hash);

        let hmac = createHmac('sha256', secret);
        hmac.setEncoding('hex');
        hmac.write(`${X_Login}${X_Date}${result}`);
        hmac.end();
        const signature = hmac.read() as string;

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
