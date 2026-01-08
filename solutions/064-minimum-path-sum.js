/**
 * 64. Minimum Path Sum
 *
 * DO NOT look at this until you've thoroughly attempted the problem!
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    const dp = Array.from({ length: rows }, () => new Array(cols).fill(0));

    dp[0][0] = grid[0][0];
    for (let r = 1; r < rows; r++) {
        dp[r][0] = dp[r - 1][0] + grid[r][0];
    }
    for (let c = 1; c < cols; c++) {
        dp[0][c] = dp[0][c - 1] + grid[0][c];
    }

    for (let r = 1; r < rows; r++) {
        for (let c = 1; c < cols; c++) {
            dp[r][c] = Math.min(dp[r - 1][c], dp[r][c - 1]) + grid[r][c];
        }
    }

    return dp[rows - 1][cols - 1];
};
