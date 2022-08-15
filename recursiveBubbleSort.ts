function recursiveBubbleSort(arr,n){
    if(n==0 || n==1){
        return -1;
    }
    let swaped:boolean=false;
    for(let j:number=0;j<n;j++){
        if(arr[j]>arr[j+1]){
            let temp=arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp
            swaped=true;
        }
    }
    if(!swaped){
        return -1;
    }
    recursiveBubbleSort(arr,n-1)

}

let recursiveInput:number[]=[9,6 ,4, 3, 2, 5 ,3];
recursiveBubbleSort(recursiveInput,6);
console.log(recursiveInput)