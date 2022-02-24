"use strict";
exports.__esModule = true;
var model_1 = require("./model");
var wallets = function (uuid) {
    if (uuid === void 0) { uuid = ''; }
    return new model_1["default"](uuid);
};
exports["default"] = wallets;
