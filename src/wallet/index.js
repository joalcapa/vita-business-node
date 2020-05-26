"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var wallet = function (uuid) {
    if (uuid === void 0) { uuid = ''; }
    var _uuid = uuid;
    var get = function () {
        console.log('GET WALLET');
    };
    return {
        get: get,
    };
};
exports.default = wallet;
