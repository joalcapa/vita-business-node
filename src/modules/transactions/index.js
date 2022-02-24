"use strict";
exports.__esModule = true;
var model_1 = require("./model");
var transactions = function (id) {
    if (id === void 0) { id = null; }
    return new model_1["default"](id);
};
exports["default"] = transactions;
