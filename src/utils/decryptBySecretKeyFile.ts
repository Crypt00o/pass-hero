import { inputEncode, outputEncode, algorithm } from "./encryptBySecretKeyFile";
import { KeyParse } from "../types/KeyParse";
import { Creds } from "../types/Creds";
import { createDecipheriv } from "crypto";
import { myErrorLogger } from "./errorLogger";

const decryptBySecretKeyFile = (key: KeyParse, passHeroEncryptedData: string): Creds => {
    try {
        const passHeroDeCipher = createDecipheriv(algorithm, key.key, key.initVictor);
        let passHeroDecryptedData = passHeroDeCipher.update(passHeroEncryptedData, outputEncode, inputEncode);
        passHeroDecryptedData += passHeroDeCipher.final(inputEncode);
        return JSON.parse(passHeroDecryptedData);
    }
    catch (err: unknown) {
        console.log('[-] Your Key Is Not Valid For This Data\n\n');
        myErrorLogger(err);
        process.exit(1);
    }
};

export { decryptBySecretKeyFile };