"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var crypto_1 = require("crypto");
var endpoints_1 = __importDefault(require("./endpoints"));
var Configuration = /** @class */ (function () {
    function Configuration() {
        this.credentials = {
            X_Login: '',
            X_Trans_Key: '',
            secret: '',
            env: '',
            isDevelopment: false,
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
        return (X_Login && X_Trans_Key && secret && env && (env === Configuration.LOCAL ||
            env === Configuration.QA ||
            env === Configuration.STAGE ||
            env === Configuration.PROD));
    };
    Configuration.isDevelopment = function () {
        var _a = Configuration.getInstance().credentials.isDevelopment, isDevelopment = _a === void 0 ? false : _a;
        return isDevelopment;
    };
    Configuration.prototype.setCredentials = function (credentials) {
        this.credentials = credentials;
    };
    Configuration.getUri = function (endpoint, resource, params) {
        if (resource === void 0) { resource = ''; }
        if (endpoint === endpoints_1.default.CREATE_RECHARGE ||
            endpoint === endpoints_1.default.CREATE_PURCHASE ||
            endpoint === endpoints_1.default.CREATE_WITHDRAWAL ||
            endpoint === endpoints_1.default.CREATE_SEND ||
            endpoint === endpoints_1.default.CREATE_VITA_SEND) {
            return {
                url: Configuration.getTransactionsUrl(),
                method: 'post',
            };
        }
        if (endpoint === endpoints_1.default.GET_TRANSACTION) {
            return {
                url: Configuration.getTransactionsUrl(resource),
                method: 'get',
            };
        }
        if (endpoint === endpoints_1.default.GET_TRANSACTIONS) {
            return {
                url: "".concat(Configuration.getTransactionsUrl(resource), "?").concat(Object.entries(params).map(function (_a) {
                    var key = _a[0], value = _a[1];
                    return "".concat(key, "=").concat(value);
                }).join("&")),
                method: 'get',
            };
        }
        if (endpoint === endpoints_1.default.GET_WALLETS || endpoint === endpoints_1.default.GET_WALLET) {
            var url = Configuration.getWalletsUrl(resource);
            var request = params;
            url = "".concat(url, "?").concat(params.hasOwnProperty('page') ? "page=".concat(request.page, "&") : '').concat(params.hasOwnProperty('count') ? "count=".concat(request.count, "&") : '').concat(params.hasOwnProperty('is_master') ? "is_master=".concat(request.is_master) : '');
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
                url: "".concat(Configuration.getBanksUrl(), "?country=").concat(iso_code),
                method: 'get',
            };
        }
        if (endpoint === endpoints_1.default.GET_PRICES) {
            var request = params;
            return {
                url: "".concat(Configuration.getPricesUrl()).concat(request.uuid ? "?wallet_uuid=".concat(request.uuid) : ''),
                method: 'get',
            };
        }
        if (endpoint === endpoints_1.default.GET_VITA_EMAIL) {
            var request = params;
            return {
                url: "".concat(Configuration.getVitaUsersUrl(), "?email=").concat(request.email),
                method: 'get',
            };
        }
        if (endpoint === endpoints_1.default.GET_BENEFICIARY) {
            return {
                url: Configuration.getBeneficiaryUrl(),
                method: 'post',
            };
        }
        if (endpoint === endpoints_1.default.GET_WITHDRAWAL_RULES) {
            return {
                url: Configuration.getWithdrawalRulesUrl(),
                method: 'get',
            };
        }
        return {
            url: '',
            method: '',
        };
    };
    Configuration.getUrl = function () {
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
    };
    Configuration.getWalletsUrl = function (resource) {
        if (resource === void 0) { resource = ''; }
        return "".concat(Configuration.getUrl(), "/wallets/").concat(resource);
    };
    Configuration.getTransactionsUrl = function (resource) {
        if (resource === void 0) { resource = ''; }
        return "".concat(Configuration.getUrl(), "/transactions/").concat(resource);
    };
    Configuration.getPricesUrl = function () {
        return "".concat(Configuration.getUrl(), "/prices");
    };
    Configuration.getBanksUrl = function () {
        return "".concat(Configuration.getUrl(), "/banks");
    };
    Configuration.getVitaUsersUrl = function () {
        return "".concat(Configuration.getUrl(), "/vita_users");
    };
    Configuration.getBeneficiaryUrl = function () {
        return "".concat(Configuration.getUrl(), "/beneficiaries/get_beneficiary");
    };
    Configuration.getWithdrawalRulesUrl = function () {
        return "".concat(Configuration.getUrl(), "/withdrawal_rules");
    };
    Configuration.prepareResult = function (hash) {
        if (hash === void 0) { hash = {}; }
        if (Object.keys(hash).length > 0) {
            return Object
                .keys(hash)
                .sort()
                .filter(function (key) { return (hash[key]); })
                .reduce(function (previousResult, key) {
                return "".concat(previousResult).concat(key).concat(hash[key]);
            }, '');
        }
        return '';
    };
    Configuration.prepareHeaders = function (hash) {
        var _a = Configuration.instance.credentials, X_Login = _a.X_Login, X_Trans_Key = _a.X_Trans_Key, secret = _a.secret;
        var X_Date = new Date().toISOString();
        var result = Configuration.prepareResult(hash);
        var hmac = (0, crypto_1.createHmac)('sha256', secret);
        hmac.setEncoding('hex');
        hmac.write("".concat(X_Login).concat(X_Date).concat(result));
        hmac.end();
        var signature = hmac.read();
        return {
            headers: {
                "X-Date": X_Date,
                "X-Login": X_Login,
                "X-Trans-Key": X_Trans_Key,
                "Content-Type": "application/json",
                "Authorization": "V2-HMAC-SHA256, Signature: ".concat(signature),
            },
        };
    };
    Configuration.LOCAL_URL = 'http://127.0.0.1:3000/api/businesses';
    Configuration.QA_URL = 'https://api.qa.vitawallet.io/api/businesses';
    Configuration.PROD_URL = 'https://api.vitawallet.io/api/businesses';
    Configuration.STAGE_URL = 'https://api.stage.vitawallet.io/api/businesses';
    Configuration.LOCAL = 'local';
    Configuration.QA = 'qa';
    Configuration.PROD = 'prod';
    Configuration.STAGE = 'stage';
    return Configuration;
}());
exports.default = Configuration;
