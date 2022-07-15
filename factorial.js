var facto = function (n) {
    var fac = 1;
    for (var index = 2; index <= n; index++) {
        fac = fac * index;
    }
    return fac;
};
console.log(facto(5));
