import { Creds } from "../types/Creds";
import { KeyParse } from "../types/KeyParse";
import { SessionParse } from "../types/SessionParse";
import { createNewData } from "./createNewData";
import { searchPasswords } from "./searchPasswords";
import { sessionOptionsChecker } from "./sessionOptionsChecker";
import { removeData } from "./removeData";
import { editExistsData } from "./editExistsData";
import { help } from "./help";
const sessionOptionsSelector=(key:KeyParse,params:SessionParse,allData:Array<Creds>,passHeroPasswd:string):void=>{
if(sessionOptionsChecker(params)){
    switch(params.option){
        case "create":
            const dataToCreate=createNewData(key,params.data,allData,passHeroPasswd)
            if(dataToCreate){
                console.log(`\n[+] Created Successfully\n\nalais:${dataToCreate.alias}\naccount:${dataToCreate.account}\npassword:${dataToCreate.password}\n`)
            }
            else{
                console.log('\n[-] Cant, Create Data, May Be A Bug or Error')
            }
        break;
        
        case "search":
            const searchResult=searchPasswords(allData,params.data)
            if(searchResult){
                if(searchResult.length==0){
                    console.log('\n[-] No Data Founded')
                }
                else{
                    console.log(`\n[+] Matched ${searchResult.length} of Creds:\n`)
                    for(let i=0;i<searchResult.length;i++){
                        console.log(i+1,":",searchResult[i])
                    }
                }
            }
            else{
                console.log('\n[-] Can,t Search Data, May Be A Bug or Error')
            }
            
        break;
        
        case "list":
            if(allData.length==0){
                console.log('\n[-] We Didn,t Found Passwords In Encrypted Pass File You Provided')
            }
            else{
                console.log(`\n[+] You Have ${allData.length} of Creds`)
                for(let i=0;i<allData.length;i++){
                    console.log(i+1,":",allData[i])
                }
                
            }
        break;
        
        case "exit":
            console.log('\n[+] Exiting ')
            process.exit(0)
        break;
            
        case "help":
            help()
        break;

        case "edit":
            const dataToUpdate=editExistsData(key,allData,params.data,params.updateData,passHeroPasswd)
            if((dataToUpdate as Array<Creds>).length==0){
                console.log('\n[-] Data Not Found To Update')
            }
            if((dataToUpdate as Array<Creds>).length!=0){
                console.log(`\n[+] Updated ${(dataToUpdate as Array<Creds>).length} of Creds\n`)
                for(let i=0;i<(dataToUpdate as Array<Creds>).length;i++){
                    console.log(i+1,":",(dataToUpdate as Array<Creds>)[i])
                }
            }
        break;
        
        case "delete":
            const dataToRemove=removeData(key,allData,params.data,passHeroPasswd)
            if((dataToRemove as Array<Creds>).length==0){
                console.log('\n[-] Data Not Found To Delete')
            }
            if((dataToRemove as Array<Creds>).length!=0){
                console.log(`\n[+] Deleted ${(dataToRemove as Array<Creds>).length} of Creds`)
                for(let i=0;i<(dataToRemove as Array<Creds>).length;i++){
                    console.log(i+1,":",(dataToRemove as Array<Creds>)[i])
                }
            }
            else{
                console.log('[-] Can,t Delete Data May Be Bug or Error')
            }
            
            
        
        break;
        



    }
}
}
export{sessionOptionsSelector}