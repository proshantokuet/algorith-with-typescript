function recursiveBubbleSort(arr, n) {
    if (n == 0 || n == 1) {
        return -1;
    }
    var swaped = false;
    for (var j = 0; j < n; j++) {
        if (arr[j] > arr[j + 1]) {
            var temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
            swaped = true;
        }
    }
    if (!swaped) {
        return -1;
    }
    recursiveBubbleSort(arr, n - 1);
}
var recursiveInput = [9, 6, 4, 3, 2, 5, 3];
recursiveBubbleSort(recursiveInput, 6);
console.log(recursiveInput);
