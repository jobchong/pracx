/**
 * 58. Length of Last Word
 *
 * DO NOT look at this until you've thoroughly attempted the problem!
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let i = s.length - 1;

    while (i >= 0 && s[i] === ' ') {
        i--;
    }

    let length = 0;
    while (i >= 0 && s[i] !== ' ') {
        length++;
        i--;
    }

    return length;
};
