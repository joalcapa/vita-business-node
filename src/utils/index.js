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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeRequestsInStorage = void 0;
var crypto_1 = __importDefault(require("crypto"));
var config_1 = __importDefault(require("../config"));
var constants_1 = require("../config/constants");
var writeRequestsInStorage = function (request) {
    if (global.localStorage && config_1.default.isDevelopment()) {
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
            requests.req = __spreadArray([
                __assign(__assign({}, request), { 
                    // @ts-ignore
                    id: crypto_1.default.randomBytes(8).toString('hex') })
            ], requests.req, true);
            global.localStorage.setItem(constants_1.REQUESTS_KEY_STORAGE, JSON.stringify(requests));
        }
    }
};
exports.writeRequestsInStorage = writeRequestsInStorage;
