import { service } from "../types/service";
import { myErrorLogger } from "./errorLogger";
const getPassword=(data:Array<service>,keySearch:string)/*:Array<service>|false*/=>{
try{

   // if(keySearch){

    //}

}
catch(err){
    myErrorLogger(err)
    return false
}
}