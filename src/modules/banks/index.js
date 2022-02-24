"use strict";
exports.__esModule = true;
var model_1 = require("./model");
var banks = function (iso_code) {
    if (iso_code === void 0) { iso_code = ''; }
    return new model_1["default"](iso_code);
};
exports["default"] = banks;
