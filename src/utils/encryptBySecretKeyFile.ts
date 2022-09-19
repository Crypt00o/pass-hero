import { createCipheriv } from "crypto";
import { myErrorLogger } from "./errorLogger";
import { KeyParse } from "../types/KeyParse";
import { Creds } from "../types/Creds";

const algorithm = 'aes-256-cbc';
const outputEncode = 'base64';
const inputEncode = 'utf-8';

const encryptBySecretKeyFile = (key: KeyParse, data: Creds): string => {

    try {
        //I Will Use Encrypting Algorithm aes-256-cbc

        const passHeroCipher = createCipheriv(algorithm, key.key, key.initVictor);
        let passHeroEncryptedData = passHeroCipher.update(JSON.stringify(data), inputEncode, outputEncode);
        passHeroEncryptedData += passHeroCipher.final(outputEncode);
        return passHeroEncryptedData;


    }
    catch (err: unknown) {
        console.log(`[-] Error While Encrypt`);
        myErrorLogger(err);
        process.exit(1);
    }

};
export { algorithm, inputEncode, outputEncode, encryptBySecretKeyFile };