"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionOptionsChecker = void 0;
var sessionOptionsChecker = function (params) {
    if (params.option == 'delete') {
        if (params.data.account || params.data.alias || params.data.password) {
            return true;
        }
        else {
            console.log('You Need To provide Account or Alias or Password To Use While Delete ');
            return false;
        }
    }
    if (params.option == 'search') {
        if (params.data.account || params.data.alias || params.data.password) {
            return true;
        }
        else {
            console.log('You Need To provide Account or Alias or Password To Use While Search');
            return false;
        }
    }
    if (params.option == 'exit') {
        return true;
    }
    if (params.option == 'list') {
        return true;
    }
    if (params.option == 'create') {
        return true;
    }
    if (params.option == "help") {
        return true;
    }
    return false;
};
exports.sessionOptionsChecker = sessionOptionsChecker;
