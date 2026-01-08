/**
 * 383. Ransom Note
 *
 * DO NOT look at this until you've thoroughly attempted the problem!
 */

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const counts = new Map();
    for (const ch of magazine) {
        counts.set(ch, (counts.get(ch) || 0) + 1);
    }

    for (const ch of ransomNote) {
        const count = counts.get(ch) || 0;
        if (count === 0) {
            return false;
        }
        counts.set(ch, count - 1);
    }

    return true;
};
