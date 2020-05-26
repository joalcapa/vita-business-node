"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
var config_1 = __importDefault(require("./config"));
var wallet_1 = __importDefault(require("./wallet"));
exports.config = function (credentials) {
    var _a = credentials.X_Login, X_Login = _a === void 0 ? null : _a, _b = credentials.X_Trans_Key, X_Trans_Key = _b === void 0 ? null : _b, _c = credentials.secret, secret = _c === void 0 ? null : _c;
    if (!X_Login || !X_Trans_Key || !secret)
        throw ("Invalid credentials");
    config_1.default.getInstance().setCredentials(credentials);
};
exports.default = {
    config: exports.config,
    wallet: wallet_1.default,
};
