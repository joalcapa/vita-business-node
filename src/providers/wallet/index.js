"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __importDefault(require("../../config"));
var middleware_1 = require("../../middleware");
var getWallet = function (uuid) {
    return middleware_1.apiCall({
        url: config_1.default.getWalletsUrl() + "/" + uuid,
        method: 'get',
    });
};
var getWallets = function () {
    return middleware_1.apiCall({
        url: config_1.default.getWalletsUrl(),
        method: 'get',
    });
};
var createWallet = function (token) {
    return middleware_1.apiCall({
        url: config_1.default.getWalletsUrl(),
        method: 'post',
        data: { token: token },
    });
};
exports.default = {
    getWallet: getWallet,
    getWallets: getWallets,
    createWallet: createWallet,
};
