import {Args} from "../types/Args"
import { myErrorLogger } from "./errorLogger";
const argsParse=():Args|false=>{

    try{
        const args= process.argv
        const passHeroPasswordList= (
         (args.indexOf('-p')!=-1 && args.indexOf('-p')== args.lastIndexOf('-p') 
         && !args.includes('--pass')&&args.includes("-p"))
        ||
        (args.indexOf('--pass')!=-1 && args.indexOf('--pass')== args.lastIndexOf('--pass') 
         && !args.includes('-p')&&args.includes("--pass"))
        ?
        args[args.indexOf('-p')] && args[args.indexOf('-p')+1] ?
        args[args.indexOf('-p')+1]:
        args[args.indexOf('--pass')]&&args[args.indexOf('--pass')+1]?
        args[args.indexOf('--pass')+1]:false
        :false
        )
        const passHeroKey=(
            (args.indexOf('-k')!=-1 && args.indexOf('-k')== args.lastIndexOf('-k') 
            && !args.includes('--key')&&args.includes("-k"))
           ||
           (args.indexOf('--key')!=-1 && args.indexOf('--key')== args.lastIndexOf('--key') 
            && !args.includes('-k')&&args.includes("--key"))
           ?
           args[args.indexOf('-k')] && args[args.indexOf('-k')+1] ?
           args[args.indexOf('-k')+1]:
           args[args.indexOf('--key')]&&args[args.indexOf('--key')+1]?
           args[args.indexOf('--key')+1]:false
           :false
           );
            if(passHeroKey&&passHeroPasswordList){
                return {passHeroKey:passHeroKey,passHeroPasswordList:passHeroPasswordList} 
            }
            else{
                return false
            }
     

    }
    catch(err){
        console.log('Error While Parse Args')
        myErrorLogger(err)
        process.exit(0)
    }
}
export {argsParse}
