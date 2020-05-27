"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Configuration = /** @class */ (function () {
    function Configuration() {
        this.credentials = null;
    }
    Configuration.getInstance = function () {
        if (!Configuration.instance) {
            Configuration.instance = new Configuration();
        }
        return Configuration.instance;
    };
    Configuration.prototype.getCredentials = function () {
        return this.credentials;
    };
    Configuration.prototype.setCredentials = function (credentials) {
        this.credentials = credentials;
    };
    return Configuration;
}());
exports.default = Configuration;
