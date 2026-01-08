/**
 * 63. Unique Paths II
 *
 * DO NOT look at this until you've thoroughly attempted the problem!
 */

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    const rows = obstacleGrid.length;
    const cols = obstacleGrid[0].length;
    const dp = Array.from({ length: rows }, () => new Array(cols).fill(0));

    if (obstacleGrid[0][0] === 1) {
        return 0;
    }
    dp[0][0] = 1;

    for (let r = 1; r < rows; r++) {
        dp[r][0] = obstacleGrid[r][0] === 1 ? 0 : dp[r - 1][0];
    }
    for (let c = 1; c < cols; c++) {
        dp[0][c] = obstacleGrid[0][c] === 1 ? 0 : dp[0][c - 1];
    }

    for (let r = 1; r < rows; r++) {
        for (let c = 1; c < cols; c++) {
            if (obstacleGrid[r][c] === 1) {
                dp[r][c] = 0;
            } else {
                dp[r][c] = dp[r - 1][c] + dp[r][c - 1];
            }
        }
    }

    return dp[rows - 1][cols - 1];
};
