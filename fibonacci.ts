const fibona=(n:number)=>{
    let fib:number[]=[0,1]
    for (let i:number = 2; i < n; i++) {
        fib[i] = fib[i-1]+ fib[i-2];       
    }
    return fib;
}

console.log(fibona(7));