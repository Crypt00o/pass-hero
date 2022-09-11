"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeRandomPass = void 0;
var makeRandomPass = function (length) {
    if (length === void 0) { length = 64; }
    var range = "0123456789~!@#$%^&*()_+}{[]|abcdefghikjlmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var password = "";
    for (var i = 0; i < length; i++) {
        var ranNumber = Math.floor(Math.random() * range.length);
        password = "".concat(password).concat(range.slice(ranNumber, ranNumber + 1));
    }
    return password;
};
exports.makeRandomPass = makeRandomPass;
