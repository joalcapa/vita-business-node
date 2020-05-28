"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __importDefault(require("../../config"));
var middlewares_1 = require("../../middlewares");
var getWallet = function (uuid) {
    return middlewares_1.apiCall({
        url: config_1.default.getWalletsUrl() + "/" + uuid,
        method: 'get',
        type: config_1.default.GET_WALLET,
    });
};
var getWallets = function () {
    return middlewares_1.apiCall({
        url: config_1.default.getWalletsUrl(),
        method: 'get',
        type: config_1.default.GET_WALLETS,
    });
};
var createWallet = function (token) {
    return middlewares_1.apiCall({
        url: config_1.default.getWalletsUrl(),
        method: 'post',
        type: config_1.default.CREATE_WALLET,
        data: { token: token },
    });
};
exports.default = {
    getWallet: getWallet,
    getWallets: getWallets,
    createWallet: createWallet,
};
