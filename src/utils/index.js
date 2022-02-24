"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.writeRequestsInStorage = void 0;
var crypto_1 = require("crypto");
var config_1 = require("../config");
var constants_1 = require("../config/constants");
exports.writeRequestsInStorage = function (request) {
    if (global.localStorage && config_1["default"].isDevelopment()) {
        var fromStorage = null;
        var requests = { req: [] };
        try {
            fromStorage = global.localStorage.getItem(constants_1.REQUESTS_KEY_STORAGE);
        }
        finally {
            if (fromStorage) {
                requests = JSON.parse(fromStorage);
            }
            // @ts-ignore
            requests.req = __spreadArrays([
                __assign(__assign({}, request), { 
                    // @ts-ignore
                    id: crypto_1["default"].randomBytes(8).toString('hex') })
            ], requests.req);
            global.localStorage.setItem(constants_1.REQUESTS_KEY_STORAGE, JSON.stringify(requests));
        }
    }
};
