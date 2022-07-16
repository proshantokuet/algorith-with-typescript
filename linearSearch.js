var linearSearch = function (arr, target) {
    for (var index = 0; index < arr.length; index++) {
        var element = arr[index];
        if (arr[index] == target) {
            return index;
        }
    }
    return -1;
};
console.log(linearSearch([12, 34, 5, 6, 7, 63], 4));
console.log(linearSearch([12, 34, 5, 6, 7, 63], 63));
