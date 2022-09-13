import { KeyParse } from "../types/KeyParse";
import {readFileSync,existsSync} from "fs"
import { myErrorLogger } from "./errorLogger";

const keyParse=(secretFilePath:string):KeyParse=>{

try{
    if(existsSync(secretFilePath)){
        const keyData=readFileSync(secretFilePath,{flag:"r","encoding":null})
        const offet=keyData[0]
        const key:KeyParse={key:keyData.slice(offet+17,offet+49) ,initVictor:keyData.slice(offet+1,offet+17)}
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