
const repoUrl="https://github.com/Crypt00o/pass-hero"

const banner=():void=>{
    
//Main Banner

console.log(`

██████╗  █████╗ ███████╗███████╗      ██╗  ██╗███████╗██████╗  ██████╗ 
██╔══██╗██╔══██╗██╔════╝██╔════╝      ██║  ██║██╔════╝██╔══██╗██╔═══██╗
██████╔╝███████║███████╗███████╗█████╗███████║█████╗  ██████╔╝██║   ██║
██╔═══╝ ██╔══██║╚════██║╚════██║╚════╝██╔══██║██╔══╝  ██╔══██╗██║   ██║
██║     ██║  ██║███████║███████║      ██║  ██║███████╗██║  ██║╚██████╔╝
╚═╝     ╚═╝  ╚═╝╚══════╝╚══════╝      ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝ ╚═════╝ 
                                                                                                                                                              
Password Manager for Createing Complex Passwords and Store it Encrypted With one file , and You can Retrieve it also  with this utility scurely
Created By Eslam Mohamed Moawed , repo: ${repoUrl}
`)
}



//My Error Logger
const ifError=(err:unknown):void=>{
console.log(`[-] Error This is May be a Bug Please Visit and Report This on   :\n\n ${repoUrl} \n\n `)
console.log(`[!] Error : ${err}`)
}
