/**
 * 68. Text Justification
 *
 * DO NOT look at this until you've thoroughly attempted the problem!
 */

/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    const result = [];
    let i = 0;

    while (i < words.length) {
        let lineLength = words[i].length;
        let j = i + 1;

        while (j < words.length && lineLength + 1 + words[j].length <= maxWidth) {
            lineLength += 1 + words[j].length;
            j++;
        }

        const numWords = j - i;
        let line = "";

        if (j === words.length || numWords === 1) {
            line = words[i];
            for (let k = i + 1; k < j; k++) {
                line += " " + words[k];
            }
            line += " ".repeat(maxWidth - line.length);
        } else {
            let totalChars = 0;
            for (let k = i; k < j; k++) {
                totalChars += words[k].length;
            }
            let totalSpaces = maxWidth - totalChars;
            const spaceBetween = Math.floor(totalSpaces / (numWords - 1));
            let extra = totalSpaces % (numWords - 1);

            for (let k = i; k < j; k++) {
                line += words[k];
                if (k < j - 1) {
                    line += " ".repeat(spaceBetween + (extra > 0 ? 1 : 0));
                    if (extra > 0) {
                        extra--;
                    }
                }
            }
        }

        result.push(line);
        i = j;
    }

    return result;
};
