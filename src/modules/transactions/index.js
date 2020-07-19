"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = __importDefault(require("./model"));
var transactions = function (id) {
    if (id === void 0) { id = null; }
    return new model_1.default(id);
};
exports.default = transactions;
