/**
 * 74. Search a 2D Matrix
 *
 * DO NOT look at this until you've thoroughly attempted the problem!
 */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    let left = 0;
    let right = rows * cols - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const value = matrix[Math.floor(mid / cols)][mid % cols];
        if (value === target) {
            return true;
        }
        if (value < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return false;
};
