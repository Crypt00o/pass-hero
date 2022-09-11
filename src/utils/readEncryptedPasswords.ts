import {readFileSync,existsSync} from "fs"
import { myErrorLogger } from "./errorLogger"
import { decryptBySecretKeyFile } from "./decryptBySecretKeyFile"
import { KeyParse } from "../types/KeyParse"
import { service } from "../types/service"

 const readEncryptedPasswords=(key:KeyParse,passHeroPasswordListPath:string):Array<service>|false=>{
    try{
        if(existsSync(passHeroPasswordListPath)){
             let data:Array<any>=JSON.parse(readFileSync(passHeroPasswordListPath,{encoding:"utf-8"}))
             //loop decrypting data
             for(let i:number=0;i<data.length;i++){
                data[i]=decryptBySecretKeyFile(key,data[i])
             }
             return data as Array<service>
            
        }
    
        else{
            //passHeroPasswordListPath not exists
            return false
        }
    }
    catch(err){
        console.log('[-] Error While Reading Passwords from Passwords file')
        myErrorLogger(err)
        process.exit(1)
    }
 }

 export{readEncryptedPasswords}