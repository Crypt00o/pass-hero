import { Service } from "../types/Service";
import { KeySearch } from "../types/KeySearch";
import { myErrorLogger } from "./errorLogger";
const searchPasswords=(data:Array<Service>,keySearch:KeySearch):Array<Service>|false=>{

    try{
        let founded:Array<Service>=[]
        for ( let i=0;i<data.length;i++){
            if(keySearch.account){
                if(data[i].account==keySearch.account){
                    founded.push(data[i])
                }
            }
            if(keySearch.service){
                if(data[i].service==keySearch.service){
                    founded.push(data[i])
                } 
            }
            if(keySearch.password){
                if(data[i].password==keySearch.password){
                    founded.push(data[i])
                }
            }
        }
        return founded
       
    } 


    
catch(err){
    myErrorLogger(err)
    return false
}
}
export {searchPasswords}
