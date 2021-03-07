"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Crypt = void 0;
const crypto_js_1 = __importDefault(require("crypto-js"));
class Crypt {
    static decrypt(cipherText) {
        const reb64 = crypto_js_1.default.enc.Hex.parse(cipherText);
        const bytes = reb64.toString(crypto_js_1.default.enc.Base64);
        const decrypt = crypto_js_1.default.AES.decrypt(bytes, process.env.SECRET);
        const plain = decrypt.toString(crypto_js_1.default.enc.Utf8);
        return plain;
    }
}
exports.Crypt = Crypt;
//# sourceMappingURL=crypt.handler.js.map