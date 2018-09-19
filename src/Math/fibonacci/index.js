/**
 * function fibonacci
 * 
 * @param {Number} n
 * 
 * @return {Number} nth fibonacci number
 */
export default function fibonacci(n) {
    if (n < 0) {
        return 0;
    }

    let a = -1;
    let b = 1;
    while (n-- >= 1) {
        b += a;
        a = b - a;
    }
    return b;
}
