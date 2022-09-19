import { createInterface } from "readline";
import { banner, Args, repoUrl, argsParse, sessionParser, SessionParse, keyGen, KeyParse, keyParse, Creds, readEncryptedPasswords, usage, sessionOptionsSelector } from ".";
const session = (): void => {
    const sessionRead = createInterface({
        input: process.stdin,
        output: process.stdout
    });
    sessionRead.question('\nPass-Hero > ', (line) => {

        if (sessionParser(line)) {
            const key: KeyParse = keyParse((argsParse() as Args).passHeroKey);
            const passHeroPasswd = (argsParse() as Args).passHeroPasswd;
            let data: Array<Creds> = readEncryptedPasswords(key, passHeroPasswd);
            //use selector

            sessionOptionsSelector(key, (sessionParser(line) as SessionParse), data, passHeroPasswd);
        }
        else {
            console.log(`[!] Invalid Syntax ,Please See Docs on ${repoUrl}  or Use Command :  help`);
        }
        sessionRead.close();
        session();

    });


};
const main = (): void => {
    banner();
    const args: unknown = argsParse();
    if (args) {

        if (keyGen((args as Args).passHeroKey)) {
            console.log('[+] Session Started\t For Help Use : help \n\n');
            session();
        }

        else {
            console.log('[-] Error While Useing  This Key, May Be This Key Is Invalid ');
            process.exit(1);
        }


    }
    else {
        usage();
    }
};
export { main };