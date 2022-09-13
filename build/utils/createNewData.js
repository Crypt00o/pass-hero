"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNewData = void 0;
var makeRandomPassword_1 = require("./makeRandomPassword");
var writeEncryptedPassword_1 = require("./writeEncryptedPassword");
var errorLogger_1 = require("./errorLogger");
var createNewData = function (key, newData, data, passHeroPasswd) {
    try {
        if (!newData.account) {
            newData.account = 'empty';
        }
        if (!newData.password) {
            newData.password = (0, makeRandomPassword_1.makeRandomPass)(newData.password_length);
        }
        if (!newData.alias) {
            newData.alias = 'empty';
        }
        data.push(newData);
        if ((0, writeEncryptedPassword_1.writeEncryptedPasswords)(key, data, passHeroPasswd)) {
            return newData;
        }
        else {
            return false;
        }
    }
    catch (err) {
        console.log('[-] Error While Createing Data');
        (0, errorLogger_1.myErrorLogger)(err);
        return false;
    }
};
exports.createNewData = createNewData;
