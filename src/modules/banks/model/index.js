"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var base_1 = __importDefault(require("./base"));
var providers_1 = require("../../../providers");
var Bank = /** @class */ (function (_super) {
    __extends(Bank, _super);
    function Bank(iso_code, length_of_checking_account_number, length_of_savings_account_number, name, bank_code) {
        if (length_of_checking_account_number === void 0) { length_of_checking_account_number = null; }
        if (length_of_savings_account_number === void 0) { length_of_savings_account_number = null; }
        if (name === void 0) { name = ''; }
        if (bank_code === void 0) { bank_code = null; }
        var _this = _super.call(this) || this;
        _this.iso_code = '';
        _this.length_of_checking_account_number = null;
        _this.length_of_savings_account_number = null;
        _this.name = '';
        _this.bank_code = null;
        _this.iso_code = iso_code.toUpperCase();
        _this.length_of_checking_account_number = length_of_checking_account_number;
        _this.length_of_savings_account_number = length_of_savings_account_number;
        _this.name = name;
        _this.bank_code = bank_code;
        return _this;
    }
    Bank.prototype.get = function () {
        var _this = this;
        return this.promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var response, banks;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, providers_1.bankProvider.getBanks(this.iso_code)];
                    case 1:
                        response = _a.sent();
                        if (response.error) {
                            reject(response.error);
                        }
                        else {
                            banks = response.banks.map(function (bank) {
                                var _a = bank.attributes, length_of_checking_account_number = _a.length_of_checking_account_number, length_of_savings_account_number = _a.length_of_savings_account_number, name = _a.name, bank_code = _a.bank_code;
                                return new Bank(_this.iso_code, length_of_checking_account_number, length_of_savings_account_number, name, bank_code);
                            });
                            resolve(banks);
                        }
                        return [2 /*return*/];
                }
            });
        }); });
    };
    return Bank;
}(base_1.default));
exports.default = Bank;
