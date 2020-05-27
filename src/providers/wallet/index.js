"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var middleware_1 = require("../../middleware");
var getWallet = function (uuid) {
};
var getWallets = function () {
};
var createWallet = function (token) {
    return middleware_1.apiCall({
        url: '',
        method: '',
        data: { token: token },
    });
};
exports.default = {
    getWallet: getWallet,
    getWallets: getWallets,
    createWallet: createWallet,
};
