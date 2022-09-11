"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myErrorLogger = void 0;
//My Error Logger
var banner_1 = require("./banner");
var myErrorLogger = function (err) {
    console.log("[-] Error This is May be a Bug Please Visit and Report This on   :\n\n ".concat(banner_1.repoUrl, " \n\n "));
    console.log("[!] Error : ".concat(err));
    process.exit(1);
};
exports.myErrorLogger = myErrorLogger;
