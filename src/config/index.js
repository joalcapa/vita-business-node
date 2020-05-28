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
    Configuration.getUri = function (endpoint) {
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
                url: Configuration.getTransactionsUrl(),
                method: 'get',
            };
        }
        if (endpoint === endpoints_1.default.GET_WALLETS || endpoint === endpoints_1.default.GET_WALLET) {
            return {
                url: Configuration.getWalletsUrl(),
                method: 'get',
            };
        }
        if (endpoint === endpoints_1.default.CREATE_WALLET)
            return {
                url: Configuration.getWalletsUrl(),
                method: 'post',
            };
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
    Configuration.getWalletsUrl = function () {
        return Configuration.getUrl() + "/wallets";
    };
    Configuration.getTransactionsUrl = function () {
        return Configuration.getUrl() + "/transactions";
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
                return '';
            }
            case endpoints_1.default.CREATE_PURCHASE: {
                return '';
            }
            case endpoints_1.default.CREATE_WITHDRAWAL: {
                return '';
            }
            case endpoints_1.default.CREATE_SEND: {
                return '';
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
        var signature = crypto_1.default.createHmac('sha256', secret);
        signature.update("" + X_Login + X_Date + result);
        signature = signature.digest('hex');
        return {
            "X-Date": X_Date,
            "X-Login": X_Login,
            "X-Trans-Key": X_Trans_Key,
            "Content-Type": "application/json",
            "Authorization": "V2-HMAC-SHA256, Signature: " + signature,
        };
    };
    Configuration.QA_URL = 'https://vita-wallet-api-qa-2.appspot.com/api/businesses';
    Configuration.PROD_URL = 'https://api.vitawallet.io/api/businesses';
    Configuration.QA = 'qa';
    Configuration.PROD = 'prod';
    return Configuration;
}());
exports.default = Configuration;
