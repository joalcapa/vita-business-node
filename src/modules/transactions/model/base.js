"use strict";
exports.__esModule = true;
var Base = /** @class */ (function () {
    function Base() {
        this.id = '';
    }
    Base.prototype.promise = function (callback) {
        if (callback === void 0) { callback = function () { }; }
        return new Promise(function (resolve, reject) {
            callback(resolve, function (error) {
                reject(new Error(JSON.stringify(error)));
            });
        });
    };
    return Base;
}());
exports["default"] = Base;
