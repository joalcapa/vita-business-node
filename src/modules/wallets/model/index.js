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
var crypto_1 = __importDefault(require("crypto"));
var base_1 = __importDefault(require("./base"));
var providers_1 = require("../../../providers");
var Wallet = /** @class */ (function (_super) {
    __extends(Wallet, _super);
    function Wallet(uuid, created_at, is_master, balances) {
        if (uuid === void 0) { uuid = ''; }
        if (created_at === void 0) { created_at = ''; }
        if (is_master === void 0) { is_master = false; }
        if (balances === void 0) { balances = { clp: 0 }; }
        var _this = _super.call(this) || this;
        _this.created_at = '';
        _this.is_master = false;
        _this.balances = {
            clp: 0,
        };
        _this.uuid = uuid;
        _this.created_at = created_at;
        _this.is_master = is_master;
        _this.balances = balances;
        return _this;
    }
    Wallet.prototype.get = function () {
        var _this = this;
        return this.promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var response, _a, _b, uuid, _c, created_at, is_master, balances, wallets;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (!this.uuid) return [3 /*break*/, 2];
                        return [4 /*yield*/, providers_1.walletProvider.getWallet(this.uuid)];
                    case 1:
                        _a = _d.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, providers_1.walletProvider.getWallets()];
                    case 3:
                        _a = _d.sent();
                        _d.label = 4;
                    case 4:
                        response = _a;
                        if (response.error) {
                            reject(response.error);
                        }
                        else {
                            if (this.uuid) {
                                _b = response.wallet, uuid = _b.uuid, _c = _b.attributes, created_at = _c.created_at, is_master = _c.is_master, balances = _c.balances;
                                this.uuid = uuid;
                                this.created_at = created_at;
                                this.is_master = is_master;
                                this.balances = balances;
                                resolve(this);
                            }
                            else {
                                wallets = response.wallets.map(function (wallet) {
                                    var uuid = wallet.uuid, _a = wallet.attributes, created_at = _a.created_at, is_master = _a.is_master, balances = _a.balances;
                                    return new Wallet(uuid, created_at, is_master, balances);
                                });
                                resolve(wallets);
                            }
                        }
                        return [2 /*return*/];
                }
            });
        }); });
    };
    Wallet.prototype.create = function (token) {
        var _this = this;
        if (token === void 0) { token = ''; }
        return this.promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var response, _a, uuid, _b, created_at, is_master, balances;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!token)
                            token = crypto_1.default.randomBytes(64).toString('hex');
                        return [4 /*yield*/, providers_1.walletProvider.createWallet(token)];
                    case 1:
                        response = _c.sent();
                        if (response.error) {
                            reject(response.error);
                        }
                        else {
                            _a = response.wallet, uuid = _a.uuid, _b = _a.attributes, created_at = _b.created_at, is_master = _b.is_master, balances = _b.balances;
                            this.uuid = uuid;
                            this.created_at = created_at;
                            this.is_master = is_master;
                            this.balances = balances;
                            resolve(this);
                        }
                        return [2 /*return*/];
                }
            });
        }); });
    };
    Wallet.prototype.transactions = function () {
        var _this = this;
        return this.promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var response, _a, uuid, _b, created_at, is_master, balances;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, providers_1.transactionsProvider.getTransactions()];
                    case 1:
                        response = _c.sent();
                        if (response.error) {
                            reject(response.error);
                        }
                        else {
                            _a = response.wallet, uuid = _a.uuid, _b = _a.attributes, created_at = _b.created_at, is_master = _b.is_master, balances = _b.balances;
                            this.uuid = uuid;
                            this.created_at = created_at;
                            this.is_master = is_master;
                            this.balances = balances;
                            resolve(this);
                        }
                        return [2 /*return*/];
                }
            });
        }); });
    };
    Wallet.prototype.recharge = function (request) {
        var _this = this;
        return this.createTransaction(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, providers_1.transactionsProvider.createRecharge(__assign({ wallet: this.uuid, transactions_type: 'recharge' }, request))];
                    case 1:
                        response = _a.sent();
                        response.error ?
                            reject(response.error) :
                            resolve(response);
                        return [2 /*return*/];
                }
            });
        }); });
    };
    Wallet.prototype.purchase = function (request) {
        var _this = this;
        return this.createTransaction(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var response, balances;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, providers_1.transactionsProvider.createRecharge(__assign({ wallet: this.uuid, transactions_type: 'purchase' }, request))];
                    case 1:
                        response = _a.sent();
                        if (response.error) {
                            reject(response.error);
                        }
                        else {
                            balances = response.transaction.attributes.sender_wallet.balances;
                            this.balances = balances;
                            resolve(response);
                        }
                        return [2 /*return*/];
                }
            });
        }); });
    };
    Wallet.prototype.withdrawal = function (request) {
        var _this = this;
        return this.createTransaction(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var response, balances;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, providers_1.transactionsProvider.createRecharge(__assign({ wallet: this.uuid, transactions_type: 'withdrawal' }, request))];
                    case 1:
                        response = _a.sent();
                        if (response.error) {
                            reject(response.error);
                        }
                        else {
                            balances = response.transaction.attributes.sender_wallet.balances;
                            this.balances = balances;
                            resolve(response);
                        }
                        return [2 /*return*/];
                }
            });
        }); });
    };
    Wallet.prototype.send = function (request) {
        var _this = this;
        return this.createTransaction(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var response, balances;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, providers_1.transactionsProvider.createRecharge(__assign({ wallet: this.uuid, transactions_type: 'send' }, request))];
                    case 1:
                        response = _a.sent();
                        if (response.error) {
                            reject(response.error);
                        }
                        else {
                            balances = response.transaction.attributes.sender_wallet.balances;
                            this.balances = balances;
                            resolve(response);
                        }
                        return [2 /*return*/];
                }
            });
        }); });
    };
    return Wallet;
}(base_1.default));
exports.default = Wallet;
