"use strict";
exports.__esModule = true;
var endpoints_1 = require("../../config/endpoints");
var middlewares_1 = require("../../middlewares");
var getBanks = function (iso_code) {
    return middlewares_1.apiCall({
        endpoint: endpoints_1["default"].GET_BANKS,
        params: {
            iso_code: iso_code
        }
    });
};
exports["default"] = {
    getBanks: getBanks
};
