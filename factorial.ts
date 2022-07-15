const facto = (n:number)=>{
    let fac:number= 1;
    for (let index:number = 2; index <=n; index++) {
        fac = fac*index;        
    }
    return fac;
}

console.log(facto(5));