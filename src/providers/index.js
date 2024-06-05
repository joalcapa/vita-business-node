"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.vitaProvider = exports.pricesProvider = exports.bankProvider = exports.transactionsProvider = exports.walletProvider = void 0;
var wallet_1 = require("./wallet");
Object.defineProperty(exports, "walletProvider", { enumerable: true, get: function () { return __importDefault(wallet_1).default; } });
var transactions_1 = require("./transactions");
Object.defineProperty(exports, "transactionsProvider", { enumerable: true, get: function () { return __importDefault(transactions_1).default; } });
var banks_1 = require("./banks");
Object.defineProperty(exports, "bankProvider", { enumerable: true, get: function () { return __importDefault(banks_1).default; } });
var prices_1 = require("./prices");
Object.defineProperty(exports, "pricesProvider", { enumerable: true, get: function () { return __importDefault(prices_1).default; } });
var vita_1 = require("./vita");
Object.defineProperty(exports, "vitaProvider", { enumerable: true, get: function () { return __importDefault(vita_1).default; } });
