"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BaseResource = /** @class */ (function () {
    function BaseResource() {
        this.uuid = '';
    }
    BaseResource.prototype.promise = function (callback) {
        if (callback === void 0) { callback = function () { }; }
        return new Promise(function (resolve, reject) {
            callback(resolve, function (error) {
                reject(new Error(JSON.stringify(error)));
            });
        });
    };
    BaseResource.prototype.createTransaction = function (callback) {
        var _this = this;
        if (callback === void 0) { callback = function () { }; }
        return this.promise(function (resolve, reject) {
            if (_this.uuid) {
                callback(resolve, reject);
            }
            else {
                reject({
                    error: 700,
                    message: 'UUID wallet not found',
                });
            }
        });
    };
    return BaseResource;
}());
exports.default = BaseResource;
