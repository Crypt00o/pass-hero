import {writeFileSync,existsSync} from "fs"
import { myErrorLogger } from "./errorLogger";
import { encryptBySecretKeyFile } from "./encryptBySecretKeyFile";
import { KeyParse } from "../types/KeyParse";
import { service } from "../types/service";

const writeEncryptedPasswords=(key:KeyParse,data:Array<service>,passHeroPasswordListPath:string):true=>{
let encryptedDataToSave:Array<string>=[]
    try{
        //loop data to encrypt
        for (let i =0; i<data.length;i++){
           encryptedDataToSave.push(encryptBySecretKeyFile(key,data[i]))
        }

        writeFileSync(passHeroPasswordListPath,JSON.stringify(encryptedDataToSave),{encoding:"utf-8"})
        return true;
        
    }
    catch(err){
        console.log('[-] Error While Writeing Encrypted')
        myErrorLogger(err)
        process.exit(0)
    }
}

export{writeEncryptedPasswords}