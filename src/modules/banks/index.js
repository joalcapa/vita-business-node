"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = __importDefault(require("./model"));
var banks = function (iso_code) {
    if (iso_code === void 0) { iso_code = ''; }
    return new model_1.default(iso_code);
};
exports.default = banks;
