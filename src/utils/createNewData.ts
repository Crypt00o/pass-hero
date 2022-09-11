import { makeRandomPass } from "./makeRandomPassword";
import { Creds } from "../types/Creds";
import { readEncryptedPasswords } from "./readEncryptedPasswords";
import { writeEncryptedPasswords } from "./writeEncryptedPassword";
import { myErrorLogger } from "./errorLogger";
import { KeyParse } from "../types/KeyParse";

const createNewData=(key:KeyParse,newData:Creds,data:Array<Creds>,passHeroPasswordListPath:string):boolean=>{
try{
    if(!newData.user){
        newData.user=''        
    }
    if(!newData.password){
    newData.password=makeRandomPass(newData.password_length)
    }
    if(!newData.alias){
        newData.alias=''
    }
    data.push(newData)
    return writeEncryptedPasswords(key,data,passHeroPasswordListPath)
}
catch(err){
    myErrorLogger(err)
    return false
}
}
export{createNewData}