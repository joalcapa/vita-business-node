"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var crypto_1 = __importDefault(require("crypto"));
var endpoints_1 = __importDefault(require("./endpoints"));
var Configuration = /** @class */ (function () {
    function Configuration() {
        this.credentials = {
            X_Login: '',
            X_Trans_Key: '',
            secret: '',
            env: '',
        };
    }
    Configuration.getInstance = function () {
        if (!Configuration.instance) {
            Configuration.instance = new Configuration();
        }
        return Configuration.instance;
    };
    Configuration.isCredentials = function () {
        var _a = Configuration.getInstance().credentials, _b = _a.X_Login, X_Login = _b === void 0 ? null : _b, _c = _a.X_Trans_Key, X_Trans_Key = _c === void 0 ? null : _c, _d = _a.secret, secret = _d === void 0 ? null : _d, _e = _a.env, env = _e === void 0 ? null : _e;
        return (X_Login && X_Trans_Key && secret && env && (env === Configuration.QA || env === Configuration.PROD));
    };
    Configuration.prototype.setCredentials = function (credentials) {
        this.credentials = credentials;
    };
    Configuration.getUri = function (endpoint, resource, params) {
        if (resource === void 0) { resource = ''; }
        if (endpoint === endpoints_1.default.CREATE_RECHARGE ||
            endpoint === endpoints_1.default.CREATE_PURCHASE ||
            endpoint === endpoints_1.default.CREATE_WITHDRAWAL ||
            endpoint === endpoints_1.default.CREATE_SEND) {
            return {
                url: Configuration.getTransactionsUrl(),
                method: 'post',
            };
        }
        if (endpoint === endpoints_1.default.GET_TRANSACTIONS || endpoint === endpoints_1.default.GET_TRANSACTION) {
            return {
                url: Configuration.getTransactionsUrl(resource),
                method: 'get',
            };
        }
        if (endpoint === endpoints_1.default.GET_WALLETS || endpoint === endpoints_1.default.GET_WALLET) {
            var url = Configuration.getWalletsUrl(resource);
            var request = params;
            url = url + "?" + (params.hasOwnProperty('page') ? "page=" + request.page + "&" : '') + (params.hasOwnProperty('count') ? "count=" + request.count + "&" : '') + (params.hasOwnProperty('is_master') ? "is_master=" + request.is_master : '');
            return {
                url: url,
                method: 'get',
            };
        }
        if (endpoint === endpoints_1.default.CREATE_WALLET) {
            return {
                url: Configuration.getWalletsUrl(),
                method: 'post',
            };
        }
        if (endpoint === endpoints_1.default.GET_BANKS) {
            var iso_code = params.iso_code;
            return {
                url: Configuration.getBanksUrl() + "?country=" + iso_code,
                method: 'get',
            };
        }
        if (endpoint === endpoints_1.default.GET_PRICES) {
            return {
                url: Configuration.getPricesUrl(),
                method: 'get',
            };
        }
        return {
            url: '',
            method: '',
        };
    };
    Configuration.getUrl = function () {
        return Configuration.instance.credentials.env === Configuration.PROD ?
            Configuration.PROD_URL :
            Configuration.QA_URL;
    };
    Configuration.getWalletsUrl = function (resource) {
        if (resource === void 0) { resource = ''; }
        return Configuration.getUrl() + "/wallets/" + resource;
    };
    Configuration.getTransactionsUrl = function (resource) {
        if (resource === void 0) { resource = ''; }
        return Configuration.getUrl() + "/transactions/" + resource;
    };
    Configuration.getPricesUrl = function () {
        return Configuration.getUrl() + "/prices";
    };
    Configuration.getBanksUrl = function () {
        return Configuration.getUrl() + "/banks";
    };
    Configuration.prepareResult = function (hash, type) {
        switch (type) {
            case endpoints_1.default.CREATE_WALLET: {
                var token = hash.token;
                return "token" + token;
            }
            case endpoints_1.default.GET_WALLETS: {
                return '';
            }
            case endpoints_1.default.GET_WALLET: {
                return '';
            }
            case endpoints_1.default.GET_TRANSACTIONS: {
                return '';
            }
            case endpoints_1.default.GET_TRANSACTION: {
                return '';
            }
            case endpoints_1.default.CREATE_RECHARGE: {
                var _a = hash, currency = _a.currency, amount = _a.amount, url_cancel = _a.url_cancel, order = _a.order, url_complete = _a.url_complete, wallet = _a.wallet, transactions_type = _a.transactions_type;
                return "amount" + amount + "currency" + currency + "order" + order + "transactions_type" + transactions_type + "url_cancel" + url_cancel + "url_complete" + url_complete + "wallet" + wallet;
            }
            case endpoints_1.default.CREATE_PURCHASE: {
                var _b = hash, currency = _b.currency, amount = _b.amount, order = _b.order, wallet = _b.wallet, transactions_type = _b.transactions_type;
                return "amount" + amount + "currency" + currency + "order" + order + "transactions_type" + transactions_type + "wallet" + wallet;
            }
            case endpoints_1.default.CREATE_WITHDRAWAL: {
                var _c = hash, url_notify = _c.url_notify, beneficiary_document_type = _c.beneficiary_document_type, beneficiary_document_number = _c.beneficiary_document_number, account_type_bank = _c.account_type_bank, account_bank = _c.account_bank, bank_code = _c.bank_code, beneficiary_email = _c.beneficiary_email, beneficiary_address = _c.beneficiary_address, beneficiary_last_name = _c.beneficiary_last_name, beneficiary_first_name = _c.beneficiary_first_name, purpose_comentary = _c.purpose_comentary, purpose = _c.purpose, country = _c.country, currency = _c.currency, order = _c.order, amount = _c.amount, wallet = _c.wallet, transactions_type = _c.transactions_type;
                return "account_bank" + account_bank + "account_type_bank" + account_type_bank + "amount" + amount + "bank_code" + bank_code + "beneficiary_address" + beneficiary_address + "beneficiary_document_number" + beneficiary_document_number + "beneficiary_document_type" + beneficiary_document_type + "beneficiary_email" + beneficiary_email + "beneficiary_first_name" + beneficiary_first_name + "beneficiary_last_name" + beneficiary_last_name + "country" + country + "currency" + currency + "order" + order + "purpose" + purpose + "purpose_comentary" + purpose_comentary + "transactions_type" + transactions_type + "url_notify" + url_notify + "wallet" + wallet;
            }
            case endpoints_1.default.CREATE_SEND: {
                var _d = hash, currency = _d.currency, amount = _d.amount, order = _d.order, wallet = _d.wallet, wallet_recipient = _d.wallet_recipient, transactions_type = _d.transactions_type;
                return "amount" + amount + "currency" + currency + "order" + order + "transactions_type" + transactions_type + "wallet" + wallet + "wallet_recipient" + wallet_recipient;
            }
            default: {
                return '';
            }
        }
    };
    Configuration.prepareHeaders = function (hash, type) {
        var _a = Configuration.instance.credentials, X_Login = _a.X_Login, X_Trans_Key = _a.X_Trans_Key, secret = _a.secret;
        var X_Date = new Date().toISOString();
        var result = Configuration.prepareResult(hash, type);
        var hmac = crypto_1.default.createHmac('sha256', secret);
        hmac.setEncoding('hex');
        hmac.write("" + X_Login + X_Date + result);
        hmac.end();
        var signature = hmac.read();
        return {
            headers: {
                "X-Date": X_Date,
                "X-Login": X_Login,
                "X-Trans-Key": X_Trans_Key,
                "Content-Type": "application/json",
                "Authorization": "V2-HMAC-SHA256, Signature: " + signature,
            },
        };
    };
    Configuration.QA_URL = 'https://vita-wallet-api-qa-2.appspot.com/api/businesses';
    Configuration.PROD_URL = 'https://api.vitawallet.io/api/businesses';
    Configuration.QA = 'qa';
    Configuration.PROD = 'prod';
    return Configuration;
}());
exports.default = Configuration;
