import { writeFileSync } from "fs";
import { myErrorLogger } from "./errorLogger";
import { encryptBySecretKeyFile } from "./encryptBySecretKeyFile";
import { KeyParse } from "../types/KeyParse";
import { Creds } from "../types/Creds";

const writeEncryptedPasswords = (key: KeyParse, data: Array<Creds>, passHeroPasswd: string): boolean => {
    let encryptedDataToSave: Array<string> = [];
    try {
        //loop data to encrypt
        for (let i = 0; i < data.length; i++) {
            encryptedDataToSave.push(encryptBySecretKeyFile(key, data[i]));
        }

        writeFileSync(passHeroPasswd, JSON.stringify(encryptedDataToSave), { encoding: "utf-8" });
        return true;

    }
    catch (err) {
        console.log('[-] Error While Writeing Encrypted');
        myErrorLogger(err);
        return false;
    }
};

export { writeEncryptedPasswords };