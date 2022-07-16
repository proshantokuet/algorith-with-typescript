const linearSearch=(arr:number[],target:number)=>{
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if(arr[index]==target){
            return index
        }
        
    }
    return -1;
}

console.log(linearSearch([12,34,5,6,7,63],4));
console.log(linearSearch([12,34,5,6,7,63],63));