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
var model_1 = __importDefault(require("../../wallets/model"));
var providers_1 = require("../../../providers");
var Transaction = /** @class */ (function (_super) {
    __extends(Transaction, _super);
    function Transaction(id, status, order, currency, category, amount, total, fee_value, total_fee, created_at, recipient_wallet, sender_wallet, recipient_email) {
        if (id === void 0) { id = null; }
        if (status === void 0) { status = ''; }
        if (order === void 0) { order = ''; }
        if (currency === void 0) { currency = ''; }
        if (category === void 0) { category = ''; }
        if (amount === void 0) { amount = 0; }
        if (total === void 0) { total = 0; }
        if (fee_value === void 0) { fee_value = 0; }
        if (total_fee === void 0) { total_fee = 0; }
        if (created_at === void 0) { created_at = ''; }
        if (recipient_wallet === void 0) { recipient_wallet = null; }
        if (sender_wallet === void 0) { sender_wallet = null; }
        if (recipient_email === void 0) { recipient_email = ''; }
        var _this = _super.call(this) || this;
        _this.status = '';
        _this.order = '';
        _this.currency = '';
        _this.category = '';
        _this.amount = 0;
        _this.total = 0;
        _this.fee_value = 0;
        _this.total_fee = 0;
        _this.created_at = '';
        _this.recipient_wallet = null;
        _this.sender_wallet = null;
        _this.recipient_email = '';
        _this.id = id;
        _this.status = status;
        _this.order = order;
        _this.currency = currency;
        _this.category = category;
        _this.amount = amount;
        _this.total = total;
        _this.fee_value = fee_value;
        _this.total_fee = total_fee;
        _this.created_at = created_at;
        _this.recipient_wallet = recipient_wallet;
        _this.sender_wallet = sender_wallet;
        _this.recipient_email = recipient_email;
        return _this;
    }
    Transaction.prototype.createWallet = function (wallet) {
        if (wallet === void 0) { wallet = null; }
        if (wallet) {
            var uuid = wallet.uuid, token = wallet.token, created_at = wallet.created_at, is_master = wallet.is_master, balances = wallet.balances;
            return new model_1.default(uuid, created_at, is_master, balances, token);
        }
        return null;
    };
    Transaction.prototype.get = function (filters) {
        var _this = this;
        if (filters === void 0) { filters = {}; }
        return this.promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var response, _a, _b, id, _c, status_1, order, currency, category, amount, total, fee_value, total_fee, created_at, recipient_wallet, sender_wallet, recipient_email, transactions;
            var _this = this;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (!this.id) return [3 /*break*/, 2];
                        return [4 /*yield*/, providers_1.transactionsProvider.getTransaction(this.id)];
                    case 1:
                        _a = _d.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, providers_1.transactionsProvider.getTransactions(filters)];
                    case 3:
                        _a = _d.sent();
                        _d.label = 4;
                    case 4:
                        response = _a;
                        if (response.error) {
                            reject(response.error);
                        }
                        else {
                            if (this.id) {
                                // eslint-disable-next-line no-unused-expressions
                                _b = response.transaction, id = _b.id, _c = _b.attributes, status_1 = _c.status, order = _c.order, currency = _c.currency, category = _c.category, amount = _c.amount, total = _c.total, fee_value = _c.fee_value, total_fee = _c.total_fee, created_at = _c.created_at, recipient_wallet = _c.recipient_wallet, sender_wallet = _c.sender_wallet, recipient_email = _c.recipient_email;
                                this.id = id;
                                this.status = status_1;
                                this.order = order;
                                this.currency = currency;
                                this.category = category;
                                this.amount = amount;
                                this.total = total;
                                this.fee_value = fee_value;
                                this.total_fee = total_fee;
                                this.created_at = created_at;
                                this.recipient_wallet = this.createWallet(recipient_wallet);
                                this.sender_wallet = this.createWallet(sender_wallet);
                                this.recipient_email = recipient_email;
                                resolve(this);
                            }
                            else {
                                transactions = response.transactions.map(function (transaction) {
                                    var id = transaction.id, _a = transaction.attributes, status = _a.status, order = _a.order, currency = _a.currency, category = _a.category, amount = _a.amount, total = _a.total, fee_value = _a.fee_value, total_fee = _a.total_fee, created_at = _a.created_at, recipient_wallet = _a.recipient_wallet, sender_wallet = _a.sender_wallet, recipient_email = _a.recipient_email;
                                    return new Transaction(id, status, order, currency, category, amount, total, fee_value, total_fee, created_at, _this.createWallet(recipient_wallet), _this.createWallet(sender_wallet), recipient_email);
                                });
                                resolve({
                                    data: transactions,
                                    total: response.total,
                                    count: response.count,
                                });
                            }
                        }
                        return [2 /*return*/];
                }
            });
        }); });
    };
    return Transaction;
}(base_1.default));
exports.default = Transaction;
