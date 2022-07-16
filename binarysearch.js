var binarySearch = function (array, target) {
    var left = 0;
    var right = array.length - 1;
    while (right >= left) {
        var middle = Math.floor((left + right) / 2);
        console.log(left + "" + right);
        console.log(middle);
        if (array[middle] == target) {
            return middle;
        }
        if (target > array[middle - 1]) {
            left = middle + 1;
        }
        else if (target < array[middle + 1]) {
            right = middle - 1;
        }
    }
    return -1;
};
console.log(binarySearch([1, 3, 4, 5, 6, 7, 8], 6));
