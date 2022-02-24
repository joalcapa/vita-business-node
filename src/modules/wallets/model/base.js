"use strict";
exports.__esModule = true;
var Base = /** @class */ (function () {
    function Base() {
        this.uuid = '';
    }
    Base.prototype.promise = function (callback) {
        if (callback === void 0) { callback = function () { }; }
        return new Promise(function (resolve, reject) {
            callback(resolve, function (error) {
                reject(new Error(JSON.stringify(error)));
            });
        });
    };
    Base.prototype.createTransaction = function (callback) {
        var _this = this;
        if (callback === void 0) { callback = function () { }; }
        return this.promise(function (resolve, reject) {
            if (_this.uuid) {
                callback(resolve, reject);
            }
            else {
                reject({
                    error: 700,
                    message: 'UUID wallet not found'
                });
            }
        });
    };
    return Base;
}());
exports["default"] = Base;
