/**
 * 77. Combinations
 *
 * DO NOT look at this until you've thoroughly attempted the problem!
 */

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const result = [];

    function backtrack(start, path) {
        if (path.length === k) {
            result.push(path.slice());
            return;
        }
        for (let i = start; i <= n; i++) {
            path.push(i);
            backtrack(i + 1, path);
            path.pop();
        }
    }

    backtrack(1, []);
    return result;
};
