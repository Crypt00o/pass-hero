const makeRandomPass=(length:number=64)=>{

    const range="0123456789~!@#$%^&*()_+}{[]|abcdefghikjlmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let password=""
    for(let i=0;i<length;i++){
        let ranNumber=Math.floor(Math.random() * range.length)
        password=`${password}${range.slice(ranNumber,ranNumber+1)}`
    }
    return password

}

export{makeRandomPass}

