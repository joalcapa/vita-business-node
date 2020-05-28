"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = __importDefault(require("./model"));
var wallets = function (uuid) {
    if (uuid === void 0) { uuid = ''; }
    return new model_1.default(uuid);
};
exports.default = wallets;
