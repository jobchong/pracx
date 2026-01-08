/**
 * 224. Basic Calculator
 *
 * DO NOT look at this until you've thoroughly attempted the problem!
 */

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    let result = 0;
    let sign = 1;
    let num = 0;
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        const ch = s[i];
        if (ch >= '0' && ch <= '9') {
            num = num * 10 + (ch.charCodeAt(0) - 48);
        } else if (ch === '+' || ch === '-') {
            result += sign * num;
            num = 0;
            sign = ch === '+' ? 1 : -1;
        } else if (ch === '(') {
            stack.push(result);
            stack.push(sign);
            result = 0;
            sign = 1;
        } else if (ch === ')') {
            result += sign * num;
            num = 0;
            result *= stack.pop();
            result += stack.pop();
        }
    }

    return result + sign * num;
};
