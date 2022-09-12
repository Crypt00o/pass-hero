const usage=():void=>{
console.log(
    `[+] Usage : 
       
    passhero --pass myencryptedpasswordfile --key myencryption&decryptionkey 


        --pass or -p : should followed with the encypted passwords or credentials file name 
        
        --key  or -k  : should followed with the crypto key to encrypt and decrypt encrypted passwords or credentials  
      
        [if the file after --pass or --key not exists there is a new key or pass file will be generated ]

    `
)
}
export {usage}