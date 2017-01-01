var i = 1;
var is = [1, 2, 3, 4];
var o = {
    name: 'peter',
    age: 21,
};
var factor_cache = {};
function isPrime(n) {
    for (var i = 2; i < n; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return n != 1;
}
/**
 * @param from : number, the upper bound
 * @param to   : number, the lower bound
 * */
function findFactorRanged(n, from, to, factors) {
    var hasCached = false;
    for (var i = from; i >= to; i--) {
        function handleCache() {
            factors.push(...factor_cache[i]);
            findFactorRanged(n, i - 1, n / i + 1, factors)
        }

        if (hasCached) {
            return handleCache();
        } else {
            if (factor_cache[i]) {
                hasCached = true;
                return handleCache();
            } else {
                if (n % i == 0) {
                    factors.push(i);
                }
            }
        }
    }
}
function findFactor(n) {
    var factors = [];
    findFactorRanged(n, n, 1, factors);
    return factors;
}
function q3(n) {
    for (var i = n; i >= 1; i--) {
        if (n % i == 0) {
            if (isPrime(i)) {
                return i;
            }
        }
    }
}
let question = 600851475143;
console.log(
    findFactor(question)
);
