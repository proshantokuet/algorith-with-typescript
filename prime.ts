const isPrime=(n:number)=>{
    if(n<2){
        return true;
    }
    for (let index = 2; index < n; index++) {
        if(n%index==0){
            return false;
        }
        return true;
        
    }
    
}

console.log(isPrime(5))