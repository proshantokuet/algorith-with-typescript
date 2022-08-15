/****
 * 9 6 4 3 2 5 3
 * 6 9 4 3 2 5 3
 * 6 4 9 3 2 5 3
 * 6 4 3 9 2 5 3
 * 6 4 3 2 9 5 3
 * 6 4 3 2 5 9 3
 * 6 4 3 2 5 3 9
 * .........
 *
 */
function bubbleSort(arr) {
    var n = 0;
    var swapped;
    for (var i = 0; i < arr.length - n; i++) {
        swapped = false;
        for (var j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }
        n++;
        console.log('swaped:', swapped);
        if (!swapped) {
            console.log('fasle');
            break;
        }
    }
}
var input = [9, 6, 4, 3, 2, 5, 3];
bubbleSort(input);
console.log(input);
