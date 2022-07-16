const recursiveFacto=(n:number):number=>{
    if(n==0){
        return 1;
    }
    console.log(n)
    return n*recursiveFacto(n-1);
}
console.log(recursiveFacto(5));