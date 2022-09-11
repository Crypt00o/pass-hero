"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.keyParse = void 0;
var fs_1 = require("fs");
var errorLogger_1 = require("./errorLogger");
var keyParse = function (secretFilePath) {
    try {
        if ((0, fs_1.existsSync)(secretFilePath)) {
            var keyData = (0, fs_1.readFileSync)(secretFilePath, { flag: "r", "encoding": null });
            var key = { key: keyData.slice(16, 48), initVictor: keyData.slice(0, 16) };
            return key;
        }
        else {
            console.log('Invalid Secret Key Path or Secret Key not Found');
            process.exit(1);
        }
    }
    catch (err) {
        console.log('[-] Error While Parse Key');
        (0, errorLogger_1.myErrorLogger)(err);
        process.exit(1);
    }
};
exports.keyParse = keyParse;
