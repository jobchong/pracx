/**
 * 127. Word Ladder
 *
 * DO NOT look at this until you've thoroughly attempted the problem!
 */

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    const wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) {
        return 0;
    }

    const length = beginWord.length;
    const patternMap = new Map();

    for (const word of wordSet) {
        for (let i = 0; i < length; i++) {
            const pattern = word.slice(0, i) + '*' + word.slice(i + 1);
            if (!patternMap.has(pattern)) {
                patternMap.set(pattern, []);
            }
            patternMap.get(pattern).push(word);
        }
    }

    const queue = [beginWord];
    const visited = new Set([beginWord]);
    let steps = 1;

    while (queue.length > 0) {
        const size = queue.length;
        for (let i = 0; i < size; i++) {
            const word = queue.shift();
            if (word === endWord) {
                return steps;
            }
            for (let j = 0; j < length; j++) {
                const pattern = word.slice(0, j) + '*' + word.slice(j + 1);
                const neighbors = patternMap.get(pattern) || [];
                for (const next of neighbors) {
                    if (!visited.has(next)) {
                        visited.add(next);
                        queue.push(next);
                    }
                }
            }
        }
        steps++;
    }

    return 0;
};
