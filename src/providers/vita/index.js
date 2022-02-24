"use strict";
exports.__esModule = true;
var endpoints_1 = require("../../config/endpoints");
var middlewares_1 = require("../../middlewares");
var getVitaEmail = function (email) {
    return middlewares_1.apiCall({
        endpoint: endpoints_1["default"].GET_VITA_EMAIL,
        params: {
            email: email
        }
    });
};
exports["default"] = {
    getVitaEmail: getVitaEmail
};
