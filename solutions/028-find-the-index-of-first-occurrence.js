/**
 * 28. Find the Index of the First Occurrence in a String
 *
 * DO NOT look at this until you've thoroughly attempted the problem!
 */

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle === "") {
        return 0;
    }

    const limit = haystack.length - needle.length;
    for (let i = 0; i <= limit; i++) {
        let j = 0;
        while (j < needle.length && haystack[i + j] === needle[j]) {
            j++;
        }
        if (j === needle.length) {
            return i;
        }
    }

    return -1;
};
