"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var endpoints_1 = __importDefault(require("../../config/endpoints"));
var middlewares_1 = require("../../middlewares");
var getPrices = function () {
    return middlewares_1.apiCall({
        endpoint: endpoints_1.default.GET_PRICES,
    });
};
exports.default = {
    getPrices: getPrices,
};
