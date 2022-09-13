import {writeFileSync,appendFileSync,existsSync} from "fs"
import {randomBytes} from "crypto"
import {join} from "path"
import { myErrorLogger } from "./errorLogger"
const keyGen=(secretFile:string):boolean=>{
    try{
        const initVector=randomBytes(16)
        const key=randomBytes(32)
        const offset=Math.floor(Math.random()*100)

        if(existsSync(join('',secretFile))){
           
            console.log(`\n[+] Useing Secret Key :${join('',secretFile)}`)
            return true
        }
        else{
            writeFileSync(secretFile,Buffer.from(offset.toString(16),'hex'),{flag:"w",encoding:null})
            appendFileSync(secretFile,randomBytes(offset),{flag:"a",encoding:null})
            appendFileSync(secretFile,initVector,{flag:"a",encoding:null})
            appendFileSync(secretFile,key,{flag:"a",encoding:null})
            appendFileSync(secretFile,randomBytes(Math.floor(Math.random() * (6666666 - 99)/2+99)),{flag:"a",encoding:null})
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