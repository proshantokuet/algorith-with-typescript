

function search(arr,target,leftIndex,rightIndex){
    if(leftIndex>rightIndex){
        return -1;
    }
    let middleIndex:number=Math.floor((leftIndex+rightIndex)/2);

    if(target==arr[middleIndex]){
        return middleIndex;
    }
    if(target>arr[middleIndex]){
        return search(arr,target,middleIndex+1,rightIndex);
    }else {
        return search(arr,target,leftIndex,middleIndex-1)
    }
}
let arr:number[]=[1, 3, 4, 6, 77, 88, 99];
let target:number=3;

console.log(search(arr,target,0,arr.length))