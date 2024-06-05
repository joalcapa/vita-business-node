"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWithdrawalRules = exports.createVitaSend = void 0;
var endpoints_1 = __importDefault(require("../../config/endpoints"));
var middlewares_1 = require("../../middlewares");
var getTransactions = function (filters) {
    if (filters === void 0) { filters = {}; }
    return (0, middlewares_1.apiCall)({
        endpoint: endpoints_1.default.GET_TRANSACTIONS,
        params: filters,
    });
};
var getTransaction = function (id) {
    if (id === void 0) { id = ''; }
    return (0, middlewares_1.apiCall)({
        endpoint: endpoints_1.default.GET_TRANSACTIONS,
        resource: id,
    });
};
var createRecharge = function (data) {
    return (0, middlewares_1.apiCall)({
        endpoint: endpoints_1.default.CREATE_RECHARGE,
        data: data,
    });
};
var createPurchase = function (data) {
    return (0, middlewares_1.apiCall)({
        endpoint: endpoints_1.default.CREATE_PURCHASE,
        data: data,
    });
};
var createWithdrawal = function (data) {
    return (0, middlewares_1.apiCall)({
        endpoint: endpoints_1.default.CREATE_WITHDRAWAL,
        data: data,
    });
};
var createSend = function (data) {
    return (0, middlewares_1.apiCall)({
        endpoint: endpoints_1.default.CREATE_SEND,
        data: data,
    });
};
var createVitaSend = function (data) {
    return (0, middlewares_1.apiCall)({
        endpoint: endpoints_1.default.CREATE_VITA_SEND,
        data: data,
    });
};
exports.createVitaSend = createVitaSend;
var getWithdrawalRules = function () {
    return (0, middlewares_1.apiCall)({
        endpoint: endpoints_1.default.GET_WITHDRAWAL_RULES,
    });
};
exports.getWithdrawalRules = getWithdrawalRules;
exports.default = {
    getTransactions: getTransactions,
    getTransaction: getTransaction,
    createRecharge: createRecharge,
    createPurchase: createPurchase,
    createWithdrawal: createWithdrawal,
    createSend: createSend,
    createVitaSend: exports.createVitaSend,
    getWithdrawalRules: exports.getWithdrawalRules,
};
