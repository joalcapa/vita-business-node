"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var endpoints_1 = __importDefault(require("../../config/endpoints"));
var middlewares_1 = require("../../middlewares");
var getTransactions = function () {
    return middlewares_1.apiCall({
        endpoint: endpoints_1.default.GET_TRANSACTIONS,
    });
};
var getTransaction = function (id) {
    if (id === void 0) { id = ''; }
    return middlewares_1.apiCall({
        endpoint: endpoints_1.default.GET_TRANSACTIONS,
        resource: id,
    });
};
var createRecharge = function (data) {
    return middlewares_1.apiCall({
        endpoint: endpoints_1.default.CREATE_RECHARGE,
        data: data,
    });
};
var createPurchase = function (data) {
    return middlewares_1.apiCall({
        endpoint: endpoints_1.default.CREATE_PURCHASE,
        data: data,
    });
};
var createWithdrawal = function (data) {
    return middlewares_1.apiCall({
        endpoint: endpoints_1.default.CREATE_WITHDRAWAL,
        data: data,
    });
};
var createSend = function (data) {
    return middlewares_1.apiCall({
        endpoint: endpoints_1.default.CREATE_SEND,
        data: data,
    });
};
exports.default = {
    getTransactions: getTransactions,
    getTransaction: getTransaction,
    createRecharge: createRecharge,
    createPurchase: createPurchase,
    createWithdrawal: createWithdrawal,
    createSend: createSend,
};
