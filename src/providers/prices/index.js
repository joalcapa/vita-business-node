"use strict";
exports.__esModule = true;
var endpoints_1 = require("../../config/endpoints");
var middlewares_1 = require("../../middlewares");
var getPrices = function (uuid) {
    if (uuid === void 0) { uuid = ''; }
    return middlewares_1.apiCall({
        endpoint: endpoints_1["default"].GET_PRICES,
        params: uuid ? { uuid: uuid } : {}
    });
};
exports["default"] = {
    getPrices: getPrices
};
