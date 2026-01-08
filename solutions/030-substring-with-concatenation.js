/**
 * 30. Substring with Concatenation of All Words
 *
 * DO NOT look at this until you've thoroughly attempted the problem!
 */

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    if (words.length === 0) {
        return [];
    }

    const wordLen = words[0].length;
    const totalLen = wordLen * words.length;
    if (s.length < totalLen) {
        return [];
    }

    const target = new Map();
    for (const w of words) {
        target.set(w, (target.get(w) || 0) + 1);
    }

    const result = [];
    for (let offset = 0; offset < wordLen; offset++) {
        let left = offset;
        let count = 0;
        const window = new Map();

        for (let right = offset; right + wordLen <= s.length; right += wordLen) {
            const word = s.slice(right, right + wordLen);
            if (!target.has(word)) {
                window.clear();
                count = 0;
                left = right + wordLen;
                continue;
            }

            window.set(word, (window.get(word) || 0) + 1);
            count++;

            while (window.get(word) > target.get(word)) {
                const leftWord = s.slice(left, left + wordLen);
                window.set(leftWord, window.get(leftWord) - 1);
                left += wordLen;
                count--;
            }

            if (count === words.length) {
                result.push(left);
                const leftWord = s.slice(left, left + wordLen);
                window.set(leftWord, window.get(leftWord) - 1);
                left += wordLen;
                count--;
            }
        }
    }

    return result;
};
