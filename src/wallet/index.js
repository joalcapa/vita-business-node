"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var resources_1 = require("./resources");
var wallets = function (uuid) {
    if (uuid === void 0) { uuid = ''; }
    return new resources_1.Wallet(uuid);
};
exports.default = wallets;
