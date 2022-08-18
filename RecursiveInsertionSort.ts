function InserstionSortRecursive(arr,i){
    console.log('Inse')
    if(arr.length==i){
        return -1
    }
    
        let j=i-1;//1 
        console.log(i);
        let numToInsert=arr[i]; 
        while(j>0 && arr[j]>numToInsert){
            console.log(i);
            arr[j+1]=arr[j];
            j=j-1;
        }
        arr[j]=numToInsert;
        InserstionSortRecursive(arr,i+1)

}

let arrInsertionRecursive:number[]=[2,5,1-4,2,6,-4]
InserstionSortRecursive(arrInsertionRecursive,1);
console.log(arrInsertionRecursive)