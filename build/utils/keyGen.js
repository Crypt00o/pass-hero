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
        var offset = Math.floor(Math.random() * 1000);
        if ((0, fs_1.existsSync)((0, path_1.join)('', secretFile))) {
            console.log("\n[+] Useing Secret Key :".concat((0, path_1.join)('', secretFile)));
            return true;
        }
        else {
            (0, fs_1.writeFileSync)(secretFile, Buffer.from(offset.toString(16), 'hex'), { flag: "w", encoding: null });
            (0, fs_1.appendFileSync)(secretFile, (0, crypto_1.randomBytes)(offset), { flag: "a", encoding: null });
            (0, fs_1.appendFileSync)(secretFile, initVector, { flag: "a", encoding: null });
            (0, fs_1.appendFileSync)(secretFile, key, { flag: "a", encoding: null });
            (0, fs_1.appendFileSync)(secretFile, (0, crypto_1.randomBytes)(Math.floor(Math.random() * 1000)), { flag: "a", encoding: null });
            console.log("\n[+] Secret Key Generated as : ".concat((0, path_1.join)('', secretFile)));
            return true;
        }
    }
    catch (err) {
        console.log('[-] Error While Write Key');
        (0, errorLogger_1.myErrorLogger)(err);
        process.exit(1);
    }
};
exports.keyGen = keyGen;
