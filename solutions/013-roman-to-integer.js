/**
 * 13. Roman to Integer
 *
 * DO NOT look at this until you've thoroughly attempted the problem!
 */

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const values = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    let total = 0;
    for (let i = 0; i < s.length; i++) {
        const value = values[s[i]];
        const nextValue = values[s[i + 1]] || 0;
        if (value < nextValue) {
            total -= value;
        } else {
            total += value;
        }
    }

    return total;
};
