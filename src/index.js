"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
var config_1 = __importDefault(require("./config"));
var modules_1 = require("./modules");
var model_1 = require("./modules/wallets/model");
Object.defineProperty(exports, "Wallet", { enumerable: true, get: function () { return model_1.default; } });
var model_2 = require("./modules/banks/model");
Object.defineProperty(exports, "Bank", { enumerable: true, get: function () { return model_2.default; } });
var model_3 = require("./modules/prices/model");
Object.defineProperty(exports, "Price", { enumerable: true, get: function () { return model_3.default; } });
var model_4 = require("./modules/transactions/model");
Object.defineProperty(exports, "Transaction", { enumerable: true, get: function () { return model_4.default; } });
exports.config = function (credentials) {
    var _a = credentials.X_Login, X_Login = _a === void 0 ? null : _a, _b = credentials.X_Trans_Key, X_Trans_Key = _b === void 0 ? null : _b, _c = credentials.secret, secret = _c === void 0 ? null : _c, _d = credentials.env, env = _d === void 0 ? null : _d;
    if (X_Login && X_Trans_Key && secret && env && (env === config_1.default.QA || env === config_1.default.PROD))
        config_1.default.getInstance().setCredentials(credentials);
};
exports.default = {
    config: exports.config,
    wallets: modules_1.wallets,
    banks: modules_1.banks,
    prices: modules_1.prices,
    transactions: modules_1.transactions,
};
