import { Creds } from "../types/Creds";
import { myErrorLogger } from "./errorLogger";
import { searchPasswords } from "./searchPasswords";
import { KeyParse } from "../types/KeyParse";
import { writeEncryptedPasswords } from "./writeEncryptedPassword";

const removeData=(key:KeyParse,data:Array<Creds>,keySearch:Creds,passHeroPasswd:string):Array<Creds>|false=>{
    try{
       const founded=searchPasswords(data,keySearch)
       if((founded as Array<Creds>).length==0){
        return Array()
       }
       else{
            for (let i in (founded as Array<Creds>)){
                data.splice(data.indexOf((founded as Array<Creds>)[i] as Creds),1)
            }
            writeEncryptedPasswords(key,data,passHeroPasswd)
            return founded
        
       }

    }
    catch(err){
        console.log('[-] Error While Remove Password')
        myErrorLogger(err)
        return false
    }

}
export {removeData}