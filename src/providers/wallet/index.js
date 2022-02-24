"use strict";
exports.__esModule = true;
var endpoints_1 = require("../../config/endpoints");
var middlewares_1 = require("../../middlewares");
var getWallet = function (uuid) {
    return middlewares_1.apiCall({
        endpoint: endpoints_1["default"].GET_WALLET,
        resource: uuid
    });
};
var getWallets = function (filters) {
    if (filters === void 0) { filters = {}; }
    return middlewares_1.apiCall({
        endpoint: endpoints_1["default"].GET_WALLETS,
        params: filters
    });
};
var createWallet = function (token) {
    return middlewares_1.apiCall({
        endpoint: endpoints_1["default"].CREATE_WALLET,
        data: { token: token }
    });
};
var getWalletMaster = function () {
    return middlewares_1.apiCall({
        endpoint: endpoints_1["default"].GET_WALLETS,
        params: {
            is_master: true
        }
    });
};
exports["default"] = {
    getWallet: getWallet,
    getWallets: getWallets,
    createWallet: createWallet,
    getWalletMaster: getWalletMaster
};
