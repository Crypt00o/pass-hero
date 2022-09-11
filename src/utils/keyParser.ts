import { KeyParse } from "../types/KeyParse";
import {readFileSync,existsSync} from "fs"
import { myErrorLogger } from "./errorLogger";

const keyParse=(secretFilePath:string):KeyParse=>{

try{
    if(existsSync(secretFilePath)){
        const keyData=readFileSync(secretFilePath,{flag:"r","encoding":null})
        const key:KeyParse={key:keyData.slice(16,48) ,initVictor:keyData.slice(0,16)}
        return key
    }
    else{
        console.log('Invalid Secret Key Path or Secret Key not Found')
        process.exit(1)
    }
  }
  catch(err:unknown){
    console.log('[-] Error While Parse Key')
    myErrorLogger(err)   
    process.exit(1)
  }
}

export {keyParse}