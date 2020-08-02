"use strict";
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
var src_1 = __importDefault(require("./src"));
src_1.default.config({
    X_Login: 'e65828b2cf13b7eb125e5b855bfbdee4e4b51d00',
    X_Trans_Key: '8KqvGE3AMtNSOvZ8JQxya7jnrUY=',
    secret: 'a44e5a5b70baeb9ca33700e66e3667d1c55ad449538a0463dae69090f3a2455ab6e7ccb6885e880900f1cc05a251252371a63c9863007410e4cdb802583f0fa372056ba723c14b2c8eaee5ba99b603effe61e05e2b7048c7277254390cfda4ccf42fbec979b142eaca8a6d5854556a222194b5fbffda2d818c874e4a21f5f164546da09148bde2cd529b398be14c91778ef0753eef118cf3595dc6710ada32a8a6608e99e9db2f239a262e6afc357b0f3672239f2cd888caf38c239b5d51fea0535caedc8ad24c06896046dfd29de2363d5477ffc1303755157cab437b9250a291e208a3aeea644f29a658a1dbfc6bb7c83128b3782f8c0b3fc8f06e771faf192771a269d3998a3521e7260d974dd8a7388b1045f6e4fb3c0810b4116c9ba5561ab93605717e98126279766e',
    env: 'qa',
});
var withdrawal = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, src_1.default.wallets('6400990a-baae-4c5d-ac82-c282c1da6a7b').withdrawal({
                        url_notify: 'https://localhost:3000/api/notify',
                        beneficiary_document_type: 'RUT',
                        beneficiary_document_number: '11.111.111-1',
                        account_type_bank: 'CC',
                        account_bank: '123456789',
                        bank_code: '0001',
                        beneficiary_email: 'josecaceres.oreul@gmail.com',
                        beneficiary_address: 'Algun lugar en el mundo',
                        beneficiary_last_name: 'Caceres',
                        beneficiary_first_name: 'Jose',
                        purpose_comentary: 'Envio',
                        purpose: 'EPFAMT',
                        country: 'CL',
                        currency: 'clp',
                        order: '987654321',
                        amount: 15000,
                    })];
            case 1:
                response = _a.sent();
                console.log('response for withdrawal: ', response);
                return [3 /*break*/, 3];
            case 2:
                e_1 = _a.sent();
                console.log(e_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var recharge = function () { return __awaiter(void 0, void 0, void 0, function () {
    var redirect_url, e_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, src_1.default.wallets('6400990a-baae-4c5d-ac82-c282c1da6a7b').recharge({
                        currency: 'clp',
                        order: crypto_1.default.randomBytes(64).toString('hex'),
                        amount: 7777,
                        url_complete: 'https://ur.com/complete',
                        url_cancel: 'https://ur.com/cancel',
                    })];
            case 1:
                redirect_url = _a.sent();
                console.log('redirect_url for recharge: ', redirect_url);
                return [3 /*break*/, 3];
            case 2:
                e_2 = _a.sent();
                console.log(e_2);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var banks = function () { return __awaiter(void 0, void 0, void 0, function () {
    var banks_1, banksAll, e_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, src_1.default.banks('co')];
            case 1:
                banks_1 = _a.sent();
                return [4 /*yield*/, banks_1.get()];
            case 2:
                banksAll = _a.sent();
                console.log('banks: ', banksAll);
                return [3 /*break*/, 4];
            case 3:
                e_3 = _a.sent();
                console.log(e_3);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var master = function () { return __awaiter(void 0, void 0, void 0, function () {
    var wallet, walletMaster, e_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, src_1.default.wallets()];
            case 1:
                wallet = _a.sent();
                return [4 /*yield*/, wallet.getMaster()];
            case 2:
                walletMaster = _a.sent();
                console.log('walletMaster: ', walletMaster);
                return [3 /*break*/, 4];
            case 3:
                e_4 = _a.sent();
                console.log(e_4);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var prices = function () { return __awaiter(void 0, void 0, void 0, function () {
    var prices_1, e_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, src_1.default.prices().get()];
            case 1:
                prices_1 = _a.sent();
                console.log('prices: ', prices_1.withdrawal.prices.attributes);
                return [3 /*break*/, 3];
            case 2:
                e_5 = _a.sent();
                console.log(e_5);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var transactions = function () { return __awaiter(void 0, void 0, void 0, function () {
    var transactions_1, e_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, src_1.default.transactions(190).get()];
            case 1:
                transactions_1 = _a.sent();
                console.log('transactions: ', transactions_1);
                return [3 /*break*/, 3];
            case 2:
                e_6 = _a.sent();
                console.log(e_6);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
withdrawal();
// recharge();
// banks();
// master();
// prices();
// transactions();
