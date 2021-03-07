import CryptoJS from "crypto-js";

export class Crypt {
    static decrypt(cipherText : string) :string {
        const reb64 = CryptoJS.enc.Hex.parse(cipherText);
        const bytes = reb64.toString(CryptoJS.enc.Base64);
        const decrypt = CryptoJS.AES.decrypt(bytes, process.env.SECRET);
        const plain = decrypt.toString(CryptoJS.enc.Utf8);
        return plain;
    }
}