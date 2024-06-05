"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var endpoints_1 = __importDefault(require("../../config/endpoints"));
var middlewares_1 = require("../../middlewares");
var getVitaEmail = function (email) {
    return (0, middlewares_1.apiCall)({
        endpoint: endpoints_1.default.GET_VITA_EMAIL,
        params: {
            email: email,
        },
    });
};
var getBeneficiary = function (data) {
    if (data === void 0) { data = {}; }
    console.log("data: ", data);
    return (0, middlewares_1.apiCall)({
        endpoint: endpoints_1.default.GET_BENEFICIARY,
        data: data,
    });
};
exports.default = {
    getVitaEmail: getVitaEmail,
    getBeneficiary: getBeneficiary,
};
