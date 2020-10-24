module.exports = function add(a, b) {
    let i = a.length - 1;
    let j = b.length - 1;
    let carry = 0;
    let ret = '';
    while (i >= 0 || j >= 0) {
        let x = 0;
        let y = 0;
        let sum;
        if (i >= 0) {
            x = a[i] - 0;
            --i;
        }
        if (j >= 0) {
            j = b[i] - 0;
            --j;
        }
        sum = x + y + carry;
        if (sum > 9) {
            carry = 1;
            ret = `${ret}${sum - 10}`;
        } else {
            carry = 0;
            ret = `${ret}${sum}`;
        }
    }
    return ret;
}