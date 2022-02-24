"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
exports.__esModule = true;
var wallet_1 = require("./wallet");
__createBinding(exports, wallet_1, "default", "walletProvider");
var transactions_1 = require("./transactions");
__createBinding(exports, transactions_1, "default", "transactionsProvider");
var banks_1 = require("./banks");
__createBinding(exports, banks_1, "default", "bankProvider");
var prices_1 = require("./prices");
__createBinding(exports, prices_1, "default", "pricesProvider");
var vita_1 = require("./vita");
__createBinding(exports, vita_1, "default", "vitaProvider");
