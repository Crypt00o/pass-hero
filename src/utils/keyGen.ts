import {writeFileSync,appendFileSync,existsSync} from "fs"
import {randomBytes} from "crypto"
import {join} from "path"
import { myErrorLogger } from "./errorLogger"
const keyGen=(secretFile:string):boolean=>{
    try{
        const initVector=randomBytes(16)
        const key=randomBytes(32)
        if(existsSync(join('',secretFile))){
           
            console.log(`\n[+] Useing Secret Key :${join('',secretFile)}`)
            return true
        }
        else{
            writeFileSync(secretFile,initVector,{flag:"w",encoding:null})
            appendFileSync(secretFile,key,{flag:"a",encoding:null})
            console.log(`\n[+] Secret Key Generated as : ${join('',secretFile)}`)
            return true
        }
    }

    

    catch(err:unknown){
        console.log('[-] Error While Write Key')
        myErrorLogger(err)
        process.exit(1)
    }
}


export{keyGen}