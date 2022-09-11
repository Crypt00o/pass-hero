"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.argsParse = void 0;
var errorLogger_1 = require("./errorLogger");
var argsParse = function () {
    try {
        var args = process.argv;
        var passHeroPasswordList = ((args.indexOf('-d') != -1 && args.indexOf('-d') == args.lastIndexOf('-d')
            && !args.includes('--data') && args.includes("-d"))
            ||
                (args.indexOf('--data') != -1 && args.indexOf('--data') == args.lastIndexOf('--data')
                    && !args.includes('-d') && args.includes("--data"))
            ?
                args[args.indexOf('-d')] && args[args.indexOf('-d') + 1] ?
                    args[args.indexOf('-d') + 1] :
                    args[args.indexOf('--data')] && args[args.indexOf('--data') + 1] ?
                        args[args.indexOf('--data') + 1] : undefined
            : undefined);
        var passHeroKey = ((args.indexOf('-k') != -1 && args.indexOf('-k') == args.lastIndexOf('-k')
            && !args.includes('--key') && args.includes("-k"))
            ||
                (args.indexOf('--key') != -1 && args.indexOf('--key') == args.lastIndexOf('--key')
                    && !args.includes('-k') && args.includes("--key"))
            ?
                args[args.indexOf('-k')] && args[args.indexOf('-k') + 1] ?
                    args[args.indexOf('-k') + 1] :
                    args[args.indexOf('--key')] && args[args.indexOf('--key') + 1] ?
                        args[args.indexOf('--key') + 1] : undefined
            : undefined);
        var passHeroUser = ((args.indexOf('-u') != -1 && args.indexOf('-u') == args.lastIndexOf('-u')
            && !args.includes('--user') && args.includes("-u"))
            ||
                (args.indexOf('--user') != -1 && args.indexOf('--user') == args.lastIndexOf('--user')
                    && !args.includes('-u') && args.includes("--user"))
            ?
                args[args.indexOf('-u')] && args[args.indexOf('-u') + 1] ?
                    args[args.indexOf('-u') + 1] :
                    args[args.indexOf('--user')] && args[args.indexOf('--user') + 1] ?
                        args[args.indexOf('--user') + 1] : undefined
            : undefined);
        var passHeroPasswd = ((args.indexOf('-p') != -1 && args.indexOf('-p') == args.lastIndexOf('-p')
            && !args.includes('--pass') && args.includes("-p"))
            ||
                (args.indexOf('--pass') != -1 && args.indexOf('--pass') == args.lastIndexOf('--pass')
                    && !args.includes('-p') && args.includes("--pass"))
            ?
                args[args.indexOf('-p')] && args[args.indexOf('-p') + 1] ?
                    args[args.indexOf('-p') + 1] :
                    args[args.indexOf('--pass')] && args[args.indexOf('--pass') + 1] ?
                        args[args.indexOf('--pass') + 1] : undefined
            : undefined);
        var passHeroAlias = ((args.indexOf('-a') != -1 && args.indexOf('-a') == args.lastIndexOf('-a')
            && !args.includes('--alias') && args.includes("-a"))
            ||
                (args.indexOf('--alias') != -1 && args.indexOf('--alias') == args.lastIndexOf('--alias')
                    && !args.includes('-a') && args.includes("--alias"))
            ?
                args[args.indexOf('-a')] && args[args.indexOf('-a') + 1] ?
                    args[args.indexOf('-a') + 1] :
                    args[args.indexOf('--alias')] && args[args.indexOf('--alias') + 1] ?
                        args[args.indexOf('--alias') + 1] : undefined
            : undefined);
        var passHeroOption = ((args.indexOf('-o') != -1 && args.indexOf('-o') == args.lastIndexOf('-o')
            && !args.includes('--option') && args.includes("-o"))
            ||
                (args.indexOf('--option') != -1 && args.indexOf('--option') == args.lastIndexOf('--option')
                    && !args.includes('-o') && args.includes("--option"))
            ?
                args[args.indexOf('-o')] && args[args.indexOf('-o') + 1] ?
                    args[args.indexOf('-o') + 1] :
                    args[args.indexOf('--option')] && args[args.indexOf('--option') + 1] ?
                        args[args.indexOf('--option') + 1] : undefined
            : undefined);
        if (passHeroKey && passHeroPasswordList && passHeroOption) {
            return { passHeroKey: passHeroKey, passHeroPasswordList: passHeroPasswordList, option: passHeroOption, user: passHeroUser, pass: passHeroPasswd, alias: passHeroAlias };
        }
        else {
            return false;
        }
    }
    catch (err) {
        console.log('Error While Parse Args');
        (0, errorLogger_1.myErrorLogger)(err);
        process.exit(0);
    }
};
exports.argsParse = argsParse;
