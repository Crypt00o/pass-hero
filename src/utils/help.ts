
const help = () => {
   console.log(`
    
    option account='' password='' length='' alias='' 
    
  [+] Options :
     create : for createing encrypted credentials with passwords ,password can be set manually or it will be random complex password
     
     search : for search in encrypted passwords with data as parameters you can search with password or account or alias  ,or all of this combained
     
     delete : for delete from encrypted passwords with data as parameters you can search with 
     
     list   : for read and list all encrypted passwords from spefic enctypted passwords file maded By This Pass-Hero
     
     help   : for showing This Help
     
     exit   : for Exiting This session
    
  [+] Examples : 
     #Create : you can use or not use params with this option like : password,alias,account,length . (length for password length if you want random complex password with spefic length default for random pass is 64)
     
        create alias='google' account='account@gmail.com'  
     
    
     #Search : you must use params with any of password,alias,account When You Determine more option You Get More Determined Results
        
        search alias='google'                 : this will show all passwords & accounts which it,s alias='google' 
        search alias='google' account='me@example.com' this will show any account,passwords which it,s alias='google' and account='me@example.com'     
    
     #Delete : you must use params with any of password,alias,account When You Determine more option You Get More Determined Results To Delete
         
        delete alias='google'                 : this will show all passwords & accounts which it,s alias='google' 
        delete alias='google' account='me@example.com' this will show any account,passwords which it,s alias='google' and account='me@example.com'     
    
    #List : this command doesn,t require any parameters , this will list and read all encrypted passwords from spefic Pass-Hero file

        list                                   :this will show read all encrypted passwords from spefic Pass-Hero file
    
    #Exit : this will exit Pass-Hero Session
        exit 
         
    `);
};
export { help };