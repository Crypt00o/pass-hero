import {readFileSync,existsSync} from "fs"
import { myErrorLogger } from "./errorLogger"
import { decryptBySecretKeyFile } from "./decryptBySecretKeyFile"
import { KeyParse } from "../types/KeyParse"
import { Creds } from "../types/Creds"

 const readEncryptedPasswords=(key:KeyParse,passHeroPasswd:string):Array<Creds>=>{
    try{
        if(existsSync(passHeroPasswd)){
             let data:Array<any>=JSON.parse(readFileSync(passHeroPasswd,{encoding:"utf-8"}))
             //loop decrypting data
             for(let i:number=0;i<data.length;i++){
                data[i]=decryptBySecretKeyFile(key,data[i])
             }
             return data as Array<Creds>
            
        }
    
        else{
            //passHeroPasswordListPath not exists
            return []
        }
    }
    catch(err){
        console.log('[-] Error While Reading Passwords from Passwords file')
        myErrorLogger(err)
        return []
    }
 }

 export{readEncryptedPasswords}