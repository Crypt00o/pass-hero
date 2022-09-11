import {createCipheriv} from "crypto"
import { myErrorLogger } from "./errorLogger"
import { KeyParse } from "../types/KeyParse"
import { service } from "../types/service"

const alogrithm='aes-256-cbc'
const outputEncode='base64'
const inputEncode='utf-8'

const encryptBySecretKeyFile=(key:KeyParse,data:service):string=>{

    try{
        //I Will Use Encrypting Alogrithm aes-256-cbc
        
        const passHeroCipher=createCipheriv(alogrithm,key.key,key.initVictor)
        let passHeroEncryptedData=passHeroCipher.update(JSON.stringify(key),inputEncode,outputEncode)
        passHeroEncryptedData+=passHeroCipher.final(outputEncode)
        return passHeroEncryptedData


    }
    catch(err:unknown){
        console.log(`Error While Encrypt`)
        myErrorLogger(err)
        process.exit(1)
    }

}
export {alogrithm,inputEncode,outputEncode,encryptBySecretKeyFile}