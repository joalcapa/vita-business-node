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
    X_Login: 'b04bee5d1ac0e778369e86a1be43029c235454fc',
    X_Trans_Key: '7vnjRK86EkYBUw5NSjCaCLubbn8=',
    secret: '78038eaf2fc3eefa953687d8d20bf9c16b54d778e01559c7b663c7cf0310c1f3934b15edb7ed14caf3e3221b49f80950183f1155ae44712b16bef007456fe81014e6772508acd8f102af1ad14ab7beb8e8e3af095f278ec708809edbe4466fbeb8dcf7751f13b48651be82eddea24e07fb8f997b1e7cf6e947eb77febc0f0298219d689ecc71f46c9ce2e04de063160556a85a2cd5fcbfff469a4fc092e51c3478a94ad340e78c44f938667d3b9fcf9354fa9932335d76d36514e0f05a03e0185194bbe27c6b963a72923c11252c195fbbe583455cd6fa8ab79a7b037a36b1ab2cd510b49dee6e6d17682475f67417bcddd2e760fc2ca9b3052e125f90ab7c959c8884cee3ab8b91f95b5dc1bd83b33d0bc8c60b510b6ecf6de09ed7c5b9970bd64b5b09d3181ab5bbd1244f',
    env: 'qa',
});
var recharge = function () { return __awaiter(void 0, void 0, void 0, function () {
    var wallet, redirect_url, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, src_1.default.wallets('6400990a-baae-4c5d-ac82-c282c1da6a7b')];
            case 1:
                wallet = _a.sent();
                return [4 /*yield*/, wallet.recharge({
                        currency: 'clp',
                        order: crypto_1.default.randomBytes(64).toString('hex'),
                        amount: 7777,
                        url_complete: 'https://ur.com/complete',
                        url_cancel: 'https://ur.com/cancel',
                    })];
            case 2:
                redirect_url = _a.sent();
                console.log('redirect_url for recharge: ', redirect_url);
                return [3 /*break*/, 4];
            case 3:
                e_1 = _a.sent();
                console.log(e_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var banks = function () { return __awaiter(void 0, void 0, void 0, function () {
    var banks_1, banksAll, e_2;
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
                e_2 = _a.sent();
                console.log(e_2);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
// recharge();
banks();
