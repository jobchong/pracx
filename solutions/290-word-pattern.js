/**
 * 290. Word Pattern
 *
 * DO NOT look at this until you've thoroughly attempted the problem!
 */

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const words = s.split(' ');
    if (pattern.length !== words.length) {
        return false;
    }

    const mapChar = new Map();
    const mapWord = new Map();

    for (let i = 0; i < pattern.length; i++) {
        const ch = pattern[i];
        const word = words[i];

        if ((mapChar.has(ch) && mapChar.get(ch) !== word) || (mapWord.has(word) && mapWord.get(word) !== ch)) {
            return false;
        }
        mapChar.set(ch, word);
        mapWord.set(word, ch);
    }

    return true;
};
