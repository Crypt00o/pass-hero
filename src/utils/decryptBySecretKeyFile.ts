import { inputEncode,outputEncode,algorithm } from "./encryptBySecretKeyFile";
import { KeyParse } from "../types/KeyParse";
import { service } from "../types/service";
import {createDecipheriv} from "crypto"
import { myErrorLogger } from "./errorLogger";

const decryptBySecretKeyFile=(key:KeyParse,passHeroEncryptedData:string):service=>{
    try{
    const passHeroDeCipher=createDecipheriv(algorithm,key.key,key.initVictor)
    let passHeroDecryptedData=passHeroDeCipher.update(passHeroEncryptedData,outputEncode,inputEncode)
    passHeroDecryptedData+=passHeroDeCipher.final(inputEncode)
    return JSON.parse(passHeroDecryptedData)
    }
    catch(err:unknown){
        myErrorLogger(err)
        process.exit(0)
    }
}

export {decryptBySecretKeyFile}