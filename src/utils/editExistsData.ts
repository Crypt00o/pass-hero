import { Creds } from "../types/Creds";
import { myErrorLogger } from "./errorLogger";
import { searchPasswords } from "./searchPasswords";
import { KeyParse } from "../types/KeyParse";
import { writeEncryptedPasswords } from "./writeEncryptedPassword";

const editExistsData=(key:KeyParse,allData:Array<Creds>,data:Creds,updateData:Creds,passHeroPasswd:string):Array<Creds>|false=>{
    try{
       const founded=searchPasswords(allData,data)
       if((founded as Array<Creds>).length==0){
        return Array()
       }
       else{
        
            for (let i in (founded as Array<Creds>)){
                if(updateData.account){
                allData[allData.indexOf((founded as Array<Creds>)[i] as Creds)].account=updateData.account
                }
                if(updateData.password){
                    allData[allData.indexOf((founded as Array<Creds>)[i] as Creds)].password=updateData.password
                }
                if(updateData.alias){
                    allData[allData.indexOf((founded as Array<Creds>)[i] as Creds)].alias=updateData.alias
                }                
            }
            writeEncryptedPasswords(key,allData,passHeroPasswd)
            return founded
        
       }

    }
    catch(err){
        console.log('[-] Error While Edit Data')
        myErrorLogger(err)
        return false
    }

}
export {editExistsData}