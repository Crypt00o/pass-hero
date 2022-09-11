"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encryptBySecretKeyFile = exports.outputEncode = exports.inputEncode = exports.alogrithm = void 0;
var crypto_1 = require("crypto");
var errorLogger_1 = require("./errorLogger");
var alogrithm = 'aes-256-cbc';
exports.alogrithm = alogrithm;
var outputEncode = 'base64';
exports.outputEncode = outputEncode;
var inputEncode = 'utf-8';
exports.inputEncode = inputEncode;
var encryptBySecretKeyFile = function (key, data) {
    try {
        //I Will Use Encrypting Alogrithm aes-256-cbc
        var passHeroCipher = (0, crypto_1.createCipheriv)(alogrithm, key.key, key.initVictor);
        var passHeroEncryptedData = passHeroCipher.update(JSON.stringify(key), inputEncode, outputEncode);
        passHeroEncryptedData += passHeroCipher.final(outputEncode);
        return passHeroEncryptedData;
    }
    catch (err) {
        console.log("Error While Encrypt");
        (0, errorLogger_1.myErrorLogger)(err);
        process.exit(1);
    }
};
exports.encryptBySecretKeyFile = encryptBySecretKeyFile;
