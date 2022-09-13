"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.keyParse = void 0;
var fs_1 = require("fs");
var errorLogger_1 = require("./errorLogger");
var keyParse = function (secretFilePath) {
    try {
        if ((0, fs_1.existsSync)(secretFilePath)) {
            var keyData = (0, fs_1.readFileSync)(secretFilePath, { flag: "r", "encoding": null });
            var offet = keyData[0];
            var key = { key: keyData.slice(offet + 17, offet + 49), initVictor: keyData.slice(offet + 1, offet + 17) };
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
