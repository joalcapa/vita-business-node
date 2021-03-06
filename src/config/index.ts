import crypto from 'crypto';
import endpoints from './endpoints';
import {Credentials, RequestCreateWallet, RequestRecharge} from '../interfaces';
import {RequestRechargeBusiness} from '../interfaces/requestRecharge';
import {RequestSendBusiness} from '../interfaces/requestSend';
import {RequestPurchaseBusiness} from '../interfaces/requestPurchase';
import {RequestWithdrawalBusiness} from "../interfaces/requestWithdrawal";
import RequestBanks from '../interfaces/requestBanks';
import RequestWallets from '../interfaces/requestWallets';

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

    public static getUri(endpoint: string, resource = '', params: {}) {
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
            return {
                url: Configuration.getPricesUrl(),
                method: 'get',
            }
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
                const {currency, amount, url_cancel, order, url_complete, wallet, transactions_type} = <RequestRechargeBusiness> hash;
                return `amount${amount}currency${currency}order${order}transactions_type${transactions_type}url_cancel${url_cancel}url_complete${url_complete}wallet${wallet}`;
            }
            case endpoints.CREATE_PURCHASE: {
                const {currency, amount, order, wallet, transactions_type} = <RequestPurchaseBusiness> hash;
                return `amount${amount}currency${currency}order${order}transactions_type${transactions_type}wallet${wallet}`;
            }
            case endpoints.CREATE_WITHDRAWAL: {
                const {
                    url_notify,
                    beneficiary_document_type,
                    beneficiary_document_number,
                    account_type_bank,
                    account_bank,
                    bank_code,
                    beneficiary_email,
                    beneficiary_address,
                    beneficiary_last_name,
                    beneficiary_first_name,
                    purpose_comentary,
                    purpose,
                    country,
                    currency,
                    order,
                    amount,
                    wallet,
                    transactions_type,
                } = <RequestWithdrawalBusiness> hash;

                return `account_bank${account_bank}account_type_bank${account_type_bank}amount${amount}bank_code${bank_code}beneficiary_address${beneficiary_address}beneficiary_document_number${beneficiary_document_number}beneficiary_document_type${beneficiary_document_type}beneficiary_email${beneficiary_email}beneficiary_first_name${beneficiary_first_name}beneficiary_last_name${beneficiary_last_name}country${country}currency${currency}order${order}purpose${purpose}purpose_comentary${purpose_comentary}transactions_type${transactions_type}url_notify${url_notify}wallet${wallet}`;
            }
            case endpoints.CREATE_SEND: {
                const {currency, amount, order, wallet, wallet_recipient, transactions_type} = <RequestSendBusiness> hash;
                return `amount${amount}currency${currency}order${order}transactions_type${transactions_type}wallet${wallet}wallet_recipient${wallet_recipient}`;
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

        let hmac = crypto.createHmac('sha256', secret);
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
