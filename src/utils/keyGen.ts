import {writeFileSync,appendFileSync,existsSync} from "fs"
import {randomBytes} from "crypto"
import {join} from "path"
import { myErrorLogger } from "./errorLogger"
const keyGen=(secretFile:string):void=>{
    try{
        const initVector=randomBytes(16)
        const key=randomBytes(32)
        if(existsSync(join('',secretFile))){
           
            console.log(`Key Intialized Before as ${join('',secretFile)}`)
        }
        else{
            writeFileSync(secretFile,initVector,{flag:"w",encoding:null})
            appendFileSync(secretFile,key,{flag:"a",encoding:null})
            console.log(`[+] Secret Key Generated at : ${join('',secretFile)}`)
        }
    }

    

    catch(err:unknown){
        console.log('[-] Error While Write Key')
        myErrorLogger(err)
    }
}


export{keyGen}