"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decryptBySecretKeyFile = void 0;
var encryptBySecretKeyFile_1 = require("./encryptBySecretKeyFile");
var crypto_1 = require("crypto");
var errorLogger_1 = require("./errorLogger");
var decryptBySecretKeyFile = function (key, passHeroEncryptedData) {
    try {
        var passHeroDeCipher = (0, crypto_1.createDecipheriv)(encryptBySecretKeyFile_1.algorithm, key.key, key.initVictor);
        var passHeroDecryptedData = passHeroDeCipher.update(passHeroEncryptedData, encryptBySecretKeyFile_1.outputEncode, encryptBySecretKeyFile_1.inputEncode);
        passHeroDecryptedData += passHeroDeCipher.final(encryptBySecretKeyFile_1.inputEncode);
        return JSON.parse(passHeroDecryptedData);
    }
    catch (err) {
        console.log('[-] Your Key Is Not Valid For This Data ');
        (0, errorLogger_1.myErrorLogger)(err);
        process.exit(1);
    }
};
exports.decryptBySecretKeyFile = decryptBySecretKeyFile;
