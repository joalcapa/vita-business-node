"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BaseResource = /** @class */ (function () {
    function BaseResource() {
    }
    BaseResource.prototype.promise = function (callback) {
        if (callback === void 0) { callback = function () { }; }
        return new Promise(function (resolve, reject) {
            callback(resolve, function (error) {
                reject(new Error(JSON.stringify(error)));
            });
        });
    };
    return BaseResource;
}());
exports.default = BaseResource;
