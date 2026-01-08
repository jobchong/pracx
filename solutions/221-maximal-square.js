/**
 * 221. Maximal Square
 *
 * DO NOT look at this until you've thoroughly attempted the problem!
 */

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const dp = Array.from({ length: rows + 1 }, () => new Array(cols + 1).fill(0));
    let maxSide = 0;

    for (let r = 1; r <= rows; r++) {
        for (let c = 1; c <= cols; c++) {
            if (matrix[r - 1][c - 1] === '1') {
                dp[r][c] = Math.min(dp[r - 1][c], dp[r][c - 1], dp[r - 1][c - 1]) + 1;
                maxSide = Math.max(maxSide, dp[r][c]);
            }
        }
    }

    return maxSide * maxSide;
};
