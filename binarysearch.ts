const binarySearch=(array:number[],target:number)=>{
    let left:number=0;
    let right:number=array.length-1;

    for (let index = 0; index < array.length; index++) {
       let middle:number=Math.floor((left+right)/2);
       console.log(left+""+right);
       console.log(middle);
       if(array[middle]==target){
         return middle;
       }
       if(target>array[middle-1]){
            left=middle+1;       
       }else if(target<array[middle+1]){
            right=middle-1;
       }        
    }
    return -1;
}

console.log(binarySearch([1, 3 ,4 ,5, 6, 7, 8],6));