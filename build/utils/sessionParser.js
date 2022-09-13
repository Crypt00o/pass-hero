"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionParser = void 0;
var errorLogger_1 = require("./errorLogger");
var sessionParser = function (line) {
    try {
        var sessionParamsRegex = /account='([^']*)'|alias='([^']*)'|length='([^']*)'|password='([^']*)'|setaccount='([^']*)'|setpassword='([^']*)'|setalias='([^']*)'/g;
        var option = line.split(" ")[0];
        var valueRegex = /'([^']*)'/g;
        var params = line.match(sessionParamsRegex);
        var data = {};
        var updateData = {};
        if (!["create", "search", "delete", "exit", "list", "help", "update"].includes(option.toLowerCase())) {
            return false;
        }
        if (params == null) {
            return { data: {}, option: option, updateData: {} };
        }
        if (params != null) {
            for (var i in params) {
                if (params[i].split('=')[0] == 'account') {
                    data.account = params[i].match(valueRegex)[0].replace(/'/g, '');
                }
                if (params[i].split('=')[0] == 'password') {
                    data.password = params[i].match(valueRegex)[0].replace(/'/g, '');
                }
                if (params[i].split('=')[0] == 'alias') {
                    data.alias = params[i].match(valueRegex)[0].replace(/'/g, '');
                }
                if (params[i].split('=')[0] == "length") {
                    if (parseInt(params[i].match(valueRegex)[0].replace(/'/g, '')) > 0) {
                        data.password_length = parseInt(params[i].match(valueRegex)[0].replace(/'/g, ''));
                    }
                }
                if (params[i].split('=')[0] == 'setalias') {
                    updateData.alias = params[i].match(valueRegex)[0].replace(/'/g, '');
                }
                if (params[i].split('=')[0] == 'setaccount') {
                    updateData.account = params[i].match(valueRegex)[0].replace(/'/g, '');
                }
                if (params[i].split('=')[0] == 'setpassword') {
                    updateData.password = params[i].match(valueRegex)[0].replace(/'/g, '');
                }
            }
        }
        return { data: data, option: option, updateData: updateData };
    }
    catch (err) {
        console.log("[-] Error While Parse Params");
        (0, errorLogger_1.myErrorLogger)(err);
        return false;
    }
};
exports.sessionParser = sessionParser;
