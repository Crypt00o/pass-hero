"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readEncryptedPasswords = void 0;
var fs_1 = require("fs");
var errorLogger_1 = require("./errorLogger");
var decryptBySecretKeyFile_1 = require("./decryptBySecretKeyFile");
var readEncryptedPasswords = function (key, passHeroPasswordListPath) {
    try {
        if ((0, fs_1.existsSync)(passHeroPasswordListPath)) {
            var data = JSON.parse((0, fs_1.readFileSync)(passHeroPasswordListPath, { encoding: "utf-8" }));
            //loop decrypting data
            for (var i = 0; i < data.length; i++) {
                data[i] = (0, decryptBySecretKeyFile_1.decryptBySecretKeyFile)(key, data[i]);
            }
            return data;
        }
        else {
            //passHeroPasswordListPath not exists
            return false;
        }
    }
    catch (err) {
        console.log('[-] Error While Reading Passwords from Passwords file');
        (0, errorLogger_1.myErrorLogger)(err);
        process.exit(1);
    }
};
exports.readEncryptedPasswords = readEncryptedPasswords;
