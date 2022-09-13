"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionOptionsSelector = void 0;
var createNewData_1 = require("./createNewData");
var searchPasswords_1 = require("./searchPasswords");
var sessionOptionsChecker_1 = require("./sessionOptionsChecker");
var removeData_1 = require("./removeData");
var editExistsData_1 = require("./editExistsData");
var help_1 = require("./help");
var sessionOptionsSelector = function (key, params, allData, passHeroPasswd) {
    if ((0, sessionOptionsChecker_1.sessionOptionsChecker)(params)) {
        switch (params.option) {
            case "create":
                var dataToCreate = (0, createNewData_1.createNewData)(key, params.data, allData, passHeroPasswd);
                if (dataToCreate) {
                    console.log("\n[+] Created Successfully\n\nalais:".concat(dataToCreate.alias, "\naccount:").concat(dataToCreate.account, "\npassword:").concat(dataToCreate.password, "\n"));
                }
                else {
                    console.log('\n[-] Cant, Create Data, May Be A Bug or Error');
                }
                break;
            case "search":
                var searchResult = (0, searchPasswords_1.searchPasswords)(allData, params.data);
                if (searchResult) {
                    if (searchResult.length == 0) {
                        console.log('\n[-] No Data Founded');
                    }
                    else {
                        console.log("\n[+] Matched ".concat(searchResult.length, " of Creds:\n"));
                        for (var i = 0; i < searchResult.length; i++) {
                            console.log(i + 1, ":", searchResult[i]);
                        }
                    }
                }
                else {
                    console.log('\n[-] Can,t Search Data, May Be A Bug or Error');
                }
                break;
            case "list":
                if (allData.length == 0) {
                    console.log('\n[-] We Didn,t Found Passwords In Encrypted Pass File You Provided');
                }
                else {
                    console.log("\n[+] You Have ".concat(allData.length, " of Creds"));
                    for (var i = 0; i < allData.length; i++) {
                        console.log(i + 1, ":", allData[i]);
                    }
                }
                break;
            case "exit":
                console.log('\n[+] Exiting ');
                process.exit(0);
                break;
            case "help":
                (0, help_1.help)();
                break;
            case "edit":
                var dataToUpdate = (0, editExistsData_1.editExistsData)(key, allData, params.data, params.updateData, passHeroPasswd);
                if (dataToUpdate.length == 0) {
                    console.log('\n[-] Data Not Found To Update');
                }
                if (dataToUpdate.length != 0) {
                    console.log("\n[+] Updated ".concat(dataToUpdate.length, " of Creds\n"));
                    for (var i = 0; i < dataToUpdate.length; i++) {
                        console.log(i + 1, ":", dataToUpdate[i]);
                    }
                }
                break;
            case "delete":
                var dataToRemove = (0, removeData_1.removeData)(key, allData, params.data, passHeroPasswd);
                if (dataToRemove.length == 0) {
                    console.log('\n[-] Data Not Found To Delete');
                }
                if (dataToRemove.length != 0) {
                    console.log("\n[+] Deleted ".concat(dataToRemove.length, " of Creds"));
                    for (var i = 0; i < dataToRemove.length; i++) {
                        console.log(i + 1, ":", dataToRemove[i]);
                    }
                }
                else {
                    console.log('[-] Can,t Delete Data May Be Bug or Error');
                }
                break;
        }
    }
};
exports.sessionOptionsSelector = sessionOptionsSelector;
