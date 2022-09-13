import { makeRandomPass } from "./makeRandomPassword";
import { Creds } from "../types/Creds";
import { writeEncryptedPasswords } from "./writeEncryptedPassword";
import { myErrorLogger } from "./errorLogger";
import { KeyParse } from "../types/KeyParse";

const createNewData=(key:KeyParse,newData:Creds,data:Array<Creds>,passHeroPasswd:string):Creds|false=>{
try{
    if(!newData.account){
        newData.account='empty'        
    }
    if(!newData.password){
    newData.password=makeRandomPass(newData.password_length)
    }
    if(!newData.alias){
        newData.alias='empty'
    }
    data.push(newData)
    if(writeEncryptedPasswords(key,data,passHeroPasswd)){
        return newData as Creds
    }
    else{
        return false
    }

}
catch(err){
    console.log('[-] Error While Createing Data')
    myErrorLogger(err)
    return false
}
}
export{createNewData}