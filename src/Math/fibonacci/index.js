/**
 * function fibonacci
 *
 * @param {Number} n
 *
 * @return {Number} nth fibonacci number
 */
function fibonacci (n) {
    if (n < 0) {
        return 0;
    }

    let a = 0;
    let b = 1;
    while (n-- > 1) {
        b += a;
        a = b - a;
    }
    return b;
}

module.exports = fibonacci;
