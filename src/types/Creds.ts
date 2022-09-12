type Creds={
    alias?:string,
    account?:string,
    password?:string,
    password_length?:number
}
type KeySearch={
    alias?:string,
    user?:string,
    password?:string
}

export {Creds,KeySearch}