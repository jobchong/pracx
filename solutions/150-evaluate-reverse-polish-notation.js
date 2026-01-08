/**
 * 150. Evaluate Reverse Polish Notation
 *
 * DO NOT look at this until you've thoroughly attempted the problem!
 */

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = [];
    const ops = new Set(['+', '-', '*', '/']);

    for (const token of tokens) {
        if (!ops.has(token)) {
            stack.push(parseInt(token, 10));
            continue;
        }

        const b = stack.pop();
        const a = stack.pop();
        let value = 0;
        if (token === '+') {
            value = a + b;
        } else if (token === '-') {
            value = a - b;
        } else if (token === '*') {
            value = a * b;
        } else {
            value = a / b;
            value = value < 0 ? Math.ceil(value) : Math.floor(value);
        }
        stack.push(value);
    }

    return stack.pop();
};
