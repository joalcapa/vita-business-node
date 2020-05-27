"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Configuration = /** @class */ (function () {
    function Configuration() {
        this.credentials = null;
    }
    Configuration.getInstance = function () {
        if (!Configuration.instance) {
            Configuration.instance = new Configuration();
        }
        return Configuration.instance;
    };
    Configuration.prototype.getCredentials = function () {
        return this.credentials;
    };
    Configuration.prototype.setCredentials = function (credentials) {
        this.credentials = credentials;
    };
    Configuration.prototype.getUrl = function () {
        return Configuration.instance.credentials.env === Configuration.QA ? Configuration.QA_URL : Configuration.PROD_URL;
    };
    Configuration.getWalletsUrl = function () {
        return Configuration.instance.getUrl() + "/wallets";
    };
    Configuration.getTransactionsUrl = function () {
        return Configuration.instance.getUrl() + "/transactions";
    };
    Configuration.getPricesUrl = function () {
        return Configuration.instance.getUrl() + "/prices";
    };
    Configuration.getBanksUrl = function () {
        return Configuration.instance.getUrl() + "/banks";
    };
    Configuration.QA_URL = 'https://vita-wallet-api-qa-2.appspot.com/api/businesses';
    Configuration.PROD_URL = 'https://api.vitawallet.io/api/businesses';
    Configuration.QA = 'qa';
    Configuration.PROD = 'prod';
    return Configuration;
}());
exports.default = Configuration;
