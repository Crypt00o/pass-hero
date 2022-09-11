"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNewData = void 0;
var makeRandomPassword_1 = require("./makeRandomPassword");
var writeEncryptedPassword_1 = require("./writeEncryptedPassword");
var errorLogger_1 = require("./errorLogger");
var createNewData = function (key, newData, data, passHeroPasswordListPath) {
    try {
        if (!newData.user) {
            newData.user = '';
        }
        if (!newData.password) {
            newData.password = (0, makeRandomPassword_1.makeRandomPass)(newData.password_length);
        }
        if (!newData.alias) {
            newData.alias = '';
        }
        data.push(newData);
        return (0, writeEncryptedPassword_1.writeEncryptedPasswords)(key, data, passHeroPasswordListPath);
    }
    catch (err) {
        (0, errorLogger_1.myErrorLogger)(err);
        return false;
    }
};
exports.createNewData = createNewData;
