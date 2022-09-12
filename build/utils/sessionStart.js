"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
var readline_1 = require("readline");
var _1 = require(".");
var session = function () {
    var sessionRead = (0, readline_1.createInterface)({
        input: process.stdin,
        output: process.stdout
    });
    sessionRead.question('\nPass-Hero > ', function (line) {
        if ((0, _1.sessionParser)(line)) {
            var key = (0, _1.keyParse)((0, _1.argsParse)().passHeroKey);
            var passHeroPasswd = (0, _1.argsParse)().passHeroPasswd;
            var data = (0, _1.readEncryptedPasswords)(key, passHeroPasswd);
            //use selector
            (0, _1.sessionOptionsSelector)(key, (0, _1.sessionParser)(line), data, passHeroPasswd);
        }
        else {
            console.log("[!] Invalid Syntax ,Please See Docs on ".concat(_1.repoUrl, "  or Use Command :  help"));
        }
        sessionRead.close();
        session();
    });
};
var main = function () {
    (0, _1.banner)();
    var args = (0, _1.argsParse)();
    if (args) {
        if ((0, _1.keyGen)(args.passHeroKey)) {
            console.log('[+] Session Started\t For Help Use : help \n\n');
            session();
        }
        else {
            console.log('[-] Error While Useing  This Key, May Be This Key Is Invalid ');
            process.exit(1);
        }
    }
    else {
        (0, _1.usage)();
    }
};
exports.main = main;
