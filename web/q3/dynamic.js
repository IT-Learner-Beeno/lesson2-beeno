function findFactors(n, factors) {
    if (n == 1) {
        factors.push(1);
        return;
    }
    factors.push(n);
    let reminding = n;
    let i = 2;
    let j = 2;
    while (true) {
        if (reminding % i == 0) {
            reminding /= i;
            // reminding = reminding / i;
            factors.push(i);
            factors.push(reminding);
            j = j * i;
        } else {
            if (reminding == 1)
                break;
            else {
                i++;
                j = i;
            }
        }
    }
}
/**
 * @return []
 * */
function expandN(src, n) {
    if (n == 1) {
        return src;
    } else if (n == 2) {
        let res = [];
        for (let head = 0; head <= src.length - 2; head++) {
            for (let i = head + 1; i < src.length; i++) {
                res.push([src[head], src[i]]);
            }
        }
        return res;
    } else {
        /* > 2 */
    }
}
/**
 * @return []
 * */
function expand(src) {
    let expanded = [];
    for (let i = 1; i < src.length; i++) {

    }
    return expanded;
}
console.log(expandN([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2));
function factors(n) {
    let fs = [];
    findFactors(n, fs);
    return expand(fs);
}
let question = 600851475143;
// console.log(factors(100));
function isPrime(n) {
    let factors = [];
    findFactors(n, factors);
    let res = factors.length == 3;
    console.log('isPrime(' + n + ')=' + res, 'factors=' + factors);
    return res;
}
function q3(n) {
    let factors = [];
    findFactors(n, factors);
    let largestPrime = 2;
    for (let i of factors) {
        if (isPrime(i)) {
            if (i > largestPrime)
                largestPrime = i;
        }
    }
    return largestPrime;
}
// console.log(
//     factors(1000)
// );
