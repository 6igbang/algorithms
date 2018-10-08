/**
 * function edulidean
 * 
 * @param {Number} n
 * 
 * @return {Number} the greatest common divisor
 */
function edulidean(a, b) {

    a = a > 0 ? a : -1 * a;
    b = b > 0 ? b : -1 * b;

    while(b !== 0) {
        let t = b;
        b = a % b;
        a = t;
    }
    return a;
}

module.exports = edulidean;
