"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchPasswords = void 0;
var errorLogger_1 = require("./errorLogger");
var searchPasswords = function (data, keySearch) {
    try {
        var founded = [];
        for (var i = 0; i < data.length; i++) {
            if (keySearch.account) {
                if (data[i].account == keySearch.account) {
                    founded.push(data[i]);
                }
            }
            if (keySearch.service) {
                if (data[i].service == keySearch.service) {
                    founded.push(data[i]);
                }
            }
            if (keySearch.password) {
                if (data[i].password == keySearch.password) {
                    founded.push(data[i]);
                }
            }
        }
        return founded;
    }
    catch (err) {
        (0, errorLogger_1.myErrorLogger)(err);
        return false;
    }
};
exports.searchPasswords = searchPasswords;
