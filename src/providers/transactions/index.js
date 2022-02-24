"use strict";
exports.__esModule = true;
exports.getWithdrawalRules = exports.createVitaSend = void 0;
var endpoints_1 = require("../../config/endpoints");
var middlewares_1 = require("../../middlewares");
var getTransactions = function (filters) {
    if (filters === void 0) { filters = {}; }
    return middlewares_1.apiCall({
        endpoint: endpoints_1["default"].GET_TRANSACTIONS,
        params: filters
    });
};
var getTransaction = function (id) {
    if (id === void 0) { id = ''; }
    return middlewares_1.apiCall({
        endpoint: endpoints_1["default"].GET_TRANSACTIONS,
        resource: id
    });
};
var createRecharge = function (data) {
    return middlewares_1.apiCall({
        endpoint: endpoints_1["default"].CREATE_RECHARGE,
        data: data
    });
};
var createPurchase = function (data) {
    return middlewares_1.apiCall({
        endpoint: endpoints_1["default"].CREATE_PURCHASE,
        data: data
    });
};
var createWithdrawal = function (data) {
    return middlewares_1.apiCall({
        endpoint: endpoints_1["default"].CREATE_WITHDRAWAL,
        data: data
    });
};
var createSend = function (data) {
    return middlewares_1.apiCall({
        endpoint: endpoints_1["default"].CREATE_SEND,
        data: data
    });
};
exports.createVitaSend = function (data) {
    return middlewares_1.apiCall({
        endpoint: endpoints_1["default"].CREATE_VITA_SEND,
        data: data
    });
};
exports.getWithdrawalRules = function () {
    return middlewares_1.apiCall({
        endpoint: endpoints_1["default"].GET_WITHDRAWAL_RULES
    });
};
exports["default"] = {
    getTransactions: getTransactions,
    getTransaction: getTransaction,
    createRecharge: createRecharge,
    createPurchase: createPurchase,
    createWithdrawal: createWithdrawal,
    createSend: createSend,
    createVitaSend: exports.createVitaSend,
    getWithdrawalRules: exports.getWithdrawalRules
};
