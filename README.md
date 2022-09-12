# Pass-Hero
- This is Password Managament Tool Created And Developed By Eslam Mohamed Elabd Under MIT License .
- Repo : [github/pass-hero](https://github.com/Crypt00o/pass-hero)
- npm-package : [npm/pass-hero](https://www.npmjs.com/package/pass-hero) 

### Info :

- This Tool Made To Store and Search and List and Delete  Credentials (account,password,alias) as Encrypted Credentials in Encrypted File and Need   Encryption Key File To Decrypt and Encrypt it .
- This Tool Written in pure and native node modules doesn,t have any Dependencies Except  `typescript,@types/node` for just development purpose.

### Installation:

`npm i  passhero -g `

### Usage :

- in Terminal

```
[+] Usage : 
       
    passhero --pass myencryptedpasswordfile --key myencryption&decryptionkey 


        --pass or -p : should followed with the encypted passwords or credentials file name 
        
        --key  or -k  : should followed with the crypto key to encrypt and decrypt encrypted passwords or credentials  
      
        [if the file after --pass or --key not exists there is a new key or pass file will be generated . 

```

<br>

- ##### it will be like :
``` 
crypto@passhero:~/passherotest$   passhero --pass passwordfile --key mynewkey


██████╗  █████╗ ███████╗███████╗      ██╗  ██╗███████╗██████╗  ██████╗ 
██╔══██╗██╔══██╗██╔════╝██╔════╝      ██║  ██║██╔════╝██╔══██╗██╔═══██╗
██████╔╝███████║███████╗███████╗█████╗███████║█████╗  ██████╔╝██║   ██║
██╔═══╝ ██╔══██║╚════██║╚════██║╚════╝██╔══██║██╔══╝  ██╔══██╗██║   ██║
██║     ██║  ██║███████║███████║      ██║  ██║███████╗██║  ██║╚██████╔╝
╚═╝     ╚═╝  ╚═╝╚══════╝╚══════╝      ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝ ╚═════╝ 
                                                                                                                                                              
Password Manager for Createing Complex Passwords and Store it Encrypted With one file , and You can Retrieve it also  with this utility scurely
Created By Eslam Mohamed Moawed , Member @Divzoon.com
 repo: https://github.com/Crypt00o/pass-hero


[+] Secret Key Generated as : mynewkey
[+] Session Started	 For Help Use : help 



Pass-Hero > 
```
<br>

[![usage](https://i.im.ge/2022/09/13/1Mvba8.usage.md.gif)](https://im.ge/i/1Mvba8)
- ###  Next Step : Meet The Pass-Hero Session
- command structure :` option account='somevalue' password='somevalue' length='somevalue' alias='somevalue' `
- #### Options :

    ``` 
     create : for createing encrypted credentials with passwords ,password can be set manually or it will be random complex password
     
     search : for search in encrypted passwords with data as parameters you can search with password or account or alias  ,or all of this combained
     
     delete : for delete from encrypted passwords with data as parameters you can search with 
     
     list   : for read and list all encrypted passwords from spefic enctypted passwords file maded By This Pass-Hero
     
     help   : for showing This Help
     
     exit   : for Exiting This session
     ```
    
### Examples : 
[![usage-full](https://i.im.ge/2022/09/13/1MvcAh.usage-full.gif)](https://im.ge/i/1MvcAh)
<br>

- Assume It Like SQL , i mean adding more spefic prams data will help you determine more  spefic result while searching or deleteing
 
<br>

- #### Create :
- you can use or not use params with this option like : password,alias,account,length . (length for password length if you want random complex password with spefic length default for random pass is 64)

     `create alias='google' account='account@gmail.com'`
<br>

- #### Search :        
- you must use params with any of password,alias,account When You Determine more params You Get More Determined Results.         

 <br>

- this will show all passwords & accounts which it,s alias value is google : 
        ```search alias='google'```

- this will show any account,passwords which it,s alias value is google and account value is me@example.com :
  ```search alias='google' account='me@example.com'```
<br>
     
- #### Delete :
- you must use params with any of password,alias,account When You Determine more params You Get More Determined Results To Delete.
- this will delete all passwords & accounts which it,s alias value is google : 
    ```delete alias='google'```
 - this will delete any account,passwords which it,s alias value is google and account value is me@example.com :
    ```delete alias='google' account='me@example.com'```
    <br> 
    
- #### List :
 - this command doesn,t require any parameters , this will list and read all encrypted passwords from spefic Pass-Hero file

    ```list```
  <br>

- #### Exit :
- this will exit Pass-Hero Session
    ```exit``` 
         
