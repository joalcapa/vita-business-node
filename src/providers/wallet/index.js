"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var endpoints_1 = __importDefault(require("../../config/endpoints"));
var middlewares_1 = require("../../middlewares");
var getWallet = function (uuid) {
    return middlewares_1.apiCall({
        endpoint: endpoints_1.default.GET_WALLET,
        resource: uuid,
    });
};
var getWallets = function () {
    return middlewares_1.apiCall({
        endpoint: endpoints_1.default.GET_WALLETS,
    });
};
var createWallet = function (token) {
    return middlewares_1.apiCall({
        endpoint: endpoints_1.default.CREATE_WALLET,
        data: { token: token },
    });
};
var getWalletMaster = function () {
    return middlewares_1.apiCall({
        endpoint: endpoints_1.default.GET_WALLETS,
        params: {
            is_master: true,
        },
    });
};
exports.default = {
    getWallet: getWallet,
    getWallets: getWallets,
    createWallet: createWallet,
    getWalletMaster: getWalletMaster
};
