import { argsParse } from "./argsParser";
import { banner } from "./banner";
import { myErrorLogger } from "./errorLogger";
import { KeyParse } from "../types/KeyParse";
import { Args } from "../types/Args";
import { Creds } from "../types/Creds";
import { keyGen } from "./keyGen";
import { keyParse } from "./keyParser";
import { encryptBySecretKeyFile } from "./encryptBySecretKeyFile";
import { decryptBySecretKeyFile } from "./decryptBySecretKeyFile";
import { writeEncryptedPasswords } from "./writeEncryptedPassword";
import { readEncryptedPasswords } from "./readEncryptedPasswords";
import {searchPasswords} from "./searchPasswords"
import { makeRandomPass } from "./makeRandomPassword";
import { createNewData } from "./createNewData";

export { argsParse,banner,myErrorLogger,keyParse,
KeyParse,Args,Creds,keyGen,encryptBySecretKeyFile,
decryptBySecretKeyFile,readEncryptedPasswords,
writeEncryptedPasswords,searchPasswords,makeRandomPass,
createNewData,
}