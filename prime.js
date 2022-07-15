var isPrime = function (n) {
    if (n < 2) {
        return true;
    }
    for (var index = 2; index < n; index++) {
        if (n % index == 0) {
            return false;
        }
        return true;
    }
};
console.log(isPrime(5));
