function InserstionSort(arr){
    console.log('Inse')
    for(let i:number=1;i<arr.length;i++){
        let j=i-1;//1 
        console.log(i);
        let numToInsert=arr[i]; 5
        while(j>0 && arr[j]>numToInsert){
            console.log(i);
            arr[j+1]=arr[j];
            j=j-1;
        }
        arr[j]=numToInsert;
    }

}

let arrInsertion:number[]=[2,5,1-4,2,6,-4]
InserstionSort(arrInsertion);
console.log(arrInsertion)