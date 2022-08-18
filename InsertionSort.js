function InserstionSort(arr) {
    console.log('Inse');
    for (var i = 1; i < arr.length; i++) {
        var j = i - 1; //1 
        console.log(i);
        var numToInsert = arr[i];
        5;
        while (j > 0 && arr[j] > numToInsert) {
            console.log(i);
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j] = numToInsert;
    }
}
var arrInsertion = [2, 5, 1 - 4, 2, 6, -4];
InserstionSort(arrInsertion);
console.log(arrInsertion);
