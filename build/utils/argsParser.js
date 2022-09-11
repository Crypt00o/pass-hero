"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errorLogger_1 = require("./errorLogger");
var argsParse = function () {
    try {
        var args = process.argv;
        var passHeroPasswordList = ((args.indexOf('-p') != -1 && args.indexOf('-p') == args.lastIndexOf('-p')
            && !args.includes('--pass') && args.includes("-p"))
            ||
                (args.indexOf('--pass') != -1 && args.indexOf('--pass') == args.lastIndexOf('--pass')
                    && !args.includes('-p') && args.includes("--pass"))
            ?
                args[args.indexOf('-p')] && args[args.indexOf('-p') + 1] ?
                    args[args.indexOf('-p') + 1] :
                    args[args.indexOf('--pass')] && args[args.indexOf('--pass') + 1] ?
                        args[args.indexOf('--pass') + 1] : false
            : false);
        var passHeroKey = ((args.indexOf('-k') != -1 && args.indexOf('-k') == args.lastIndexOf('-k')
            && !args.includes('--key') && args.includes("-k"))
            ||
                (args.indexOf('--key') != -1 && args.indexOf('--key') == args.lastIndexOf('--key')
                    && !args.includes('-k') && args.includes("--key"))
            ?
                args[args.indexOf('-k')] && args[args.indexOf('-k') + 1] ?
                    args[args.indexOf('-k') + 1] :
                    args[args.indexOf('--key')] && args[args.indexOf('--key') + 1] ?
                        args[args.indexOf('--key') + 1] : false
            : false);
        if (passHeroKey && passHeroPasswordList) {
            return { passHeroKey: passHeroKey, passHeroPasswordList: passHeroPasswordList };
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
