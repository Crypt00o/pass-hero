"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeData = void 0;
var errorLogger_1 = require("./errorLogger");
var searchPasswords_1 = require("./searchPasswords");
var writeEncryptedPassword_1 = require("./writeEncryptedPassword");
var removeData = function (key, data, keySearch, passHeroPasswd) {
    try {
        var founded = (0, searchPasswords_1.searchPasswords)(data, keySearch);
        if (founded.length == 0) {
            return Array();
        }
        else {
            for (var i in founded) {
                data.splice(data.indexOf(founded[i]), 1);
            }
            (0, writeEncryptedPassword_1.writeEncryptedPasswords)(key, data, passHeroPasswd);
            return founded;
        }
    }
    catch (err) {
        console.log('[-] Error While Remove Password');
        (0, errorLogger_1.myErrorLogger)(err);
        return false;
    }
};
exports.removeData = removeData;
