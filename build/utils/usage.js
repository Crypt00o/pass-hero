"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usage = void 0;
var usage = function () {
    console.log("[+] Usage : \n       \n    passhero --pass myencryptedpasswordfile --key myencryption&decryptionkey \n\n\n        --pass or -p : should followed with the encypted passwords or credentials file name \n        \n        --key  or -k  : should followed with the crypto key to encrypt and decrypt encrypted passwords or credentials  \n      \n        [if the file after --pass or --key not exists there is a new key or pass file will be generated ]\n\n    ");
};
exports.usage = usage;
