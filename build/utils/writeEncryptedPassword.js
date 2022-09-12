"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeEncryptedPasswords = void 0;
var fs_1 = require("fs");
var errorLogger_1 = require("./errorLogger");
var encryptBySecretKeyFile_1 = require("./encryptBySecretKeyFile");
var writeEncryptedPasswords = function (key, data, passHeroPasswd) {
    var encryptedDataToSave = [];
    try {
        //loop data to encrypt
        for (var i = 0; i < data.length; i++) {
            encryptedDataToSave.push((0, encryptBySecretKeyFile_1.encryptBySecretKeyFile)(key, data[i]));
        }
        (0, fs_1.writeFileSync)(passHeroPasswd, JSON.stringify(encryptedDataToSave), { encoding: "utf-8" });
        return true;
    }
    catch (err) {
        console.log('[-] Error While Writeing Encrypted');
        (0, errorLogger_1.myErrorLogger)(err);
        return false;
    }
};
exports.writeEncryptedPasswords = writeEncryptedPasswords;
