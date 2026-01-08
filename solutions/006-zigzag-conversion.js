/**
 * 6. Zigzag Conversion
 *
 * DO NOT look at this until you've thoroughly attempted the problem!
 */

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1 || s.length <= numRows) {
        return s;
    }

    const rows = Array.from({ length: numRows }, () => []);
    let row = 0;
    let direction = 1;

    for (const ch of s) {
        rows[row].push(ch);
        if (row === 0) {
            direction = 1;
        } else if (row === numRows - 1) {
            direction = -1;
        }
        row += direction;
    }

    return rows.map(r => r.join('')).join('');
};
