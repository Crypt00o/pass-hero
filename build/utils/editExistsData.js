"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.editExistsData = void 0;
var errorLogger_1 = require("./errorLogger");
var searchPasswords_1 = require("./searchPasswords");
var writeEncryptedPassword_1 = require("./writeEncryptedPassword");
var editExistsData = function (key, allData, data, updateData, passHeroPasswd) {
    try {
        var founded = (0, searchPasswords_1.searchPasswords)(allData, data);
        if (founded.length == 0) {
            return Array();
        }
        else {
            for (var i in founded) {
                if (updateData.account) {
                    allData[allData.indexOf(founded[i])].account = updateData.account;
                }
                if (updateData.password) {
                    allData[allData.indexOf(founded[i])].password = updateData.password;
                }
                if (updateData.alias) {
                    allData[allData.indexOf(founded[i])].alias = updateData.alias;
                }
            }
            (0, writeEncryptedPassword_1.writeEncryptedPasswords)(key, allData, passHeroPasswd);
            return founded;
        }
    }
    catch (err) {
        console.log('[-] Error While Edit Data');
        (0, errorLogger_1.myErrorLogger)(err);
        return false;
    }
};
exports.editExistsData = editExistsData;
