"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
exports.__esModule = true;
exports.isDevelopment = exports.isCredentials = exports.config = void 0;
var config_1 = require("./config");
var modules_1 = require("./modules");
var vita_1 = require("./providers/vita");
var transactions_1 = require("./providers/transactions");
var model_1 = require("./modules/wallets/model");
__createBinding(exports, model_1, "default", "Wallet");
var model_2 = require("./modules/banks/model");
__createBinding(exports, model_2, "default", "Bank");
var model_3 = require("./modules/prices/model");
__createBinding(exports, model_3, "default", "Price");
var model_4 = require("./modules/transactions/model");
__createBinding(exports, model_4, "default", "Transaction");
exports.config = function (credentials) {
    var _a = credentials.X_Login, X_Login = _a === void 0 ? null : _a, _b = credentials.X_Trans_Key, X_Trans_Key = _b === void 0 ? null : _b, _c = credentials.secret, secret = _c === void 0 ? null : _c, _d = credentials.env, env = _d === void 0 ? null : _d;
    if (X_Login && X_Trans_Key && secret && env && (env === config_1["default"].QA || env === config_1["default"].PROD))
        config_1["default"].getInstance().setCredentials(credentials);
};
exports.isCredentials = function () {
    return config_1["default"].isCredentials();
};
exports.isDevelopment = function () {
    return config_1["default"].isDevelopment();
};
exports["default"] = {
    vitaProvider: vita_1["default"],
    rulesProvider: {
        getWithdrawalRules: transactions_1.getWithdrawalRules
    },
    config: exports.config,
    isCredentials: exports.isCredentials,
    isDevelopment: exports.isDevelopment,
    wallets: modules_1.wallets,
    banks: modules_1.banks,
    prices: modules_1.prices,
    transactions: modules_1.transactions
};
