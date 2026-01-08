/**
 * 242. Valid Anagram
 *
 * DO NOT look at this until you've thoroughly attempted the problem!
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const counts = new Map();
    for (const ch of s) {
        counts.set(ch, (counts.get(ch) || 0) + 1);
    }

    for (const ch of t) {
        const count = counts.get(ch) || 0;
        if (count === 0) {
            return false;
        }
        counts.set(ch, count - 1);
    }

    return true;
};
