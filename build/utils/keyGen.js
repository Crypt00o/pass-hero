"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.keyGen = void 0;
var fs_1 = require("fs");
var crypto_1 = require("crypto");
var path_1 = require("path");
var errorLogger_1 = require("./errorLogger");
var keyGen = function (secretFile) {
    try {
        var initVector = (0, crypto_1.randomBytes)(16);
        var key = (0, crypto_1.randomBytes)(32);
        if ((0, fs_1.existsSync)((0, path_1.join)('', secretFile))) {
            console.log("Key Intialized Before as ".concat((0, path_1.join)('', secretFile)));
        }
        else {
            (0, fs_1.writeFileSync)(secretFile, initVector, { flag: "w", encoding: null });
            (0, fs_1.appendFileSync)(secretFile, key, { flag: "a", encoding: null });
            console.log("[+] Secret Key Generated at : ".concat((0, path_1.join)('', secretFile)));
        }
    }
    catch (err) {
        console.log('[-] Error While Write Key');
        (0, errorLogger_1.myErrorLogger)(err);
    }
};
exports.keyGen = keyGen;
