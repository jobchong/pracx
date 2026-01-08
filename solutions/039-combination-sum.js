/**
 * 39. Combination Sum
 *
 * DO NOT look at this until you've thoroughly attempted the problem!
 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const result = [];

    function backtrack(start, remaining, path) {
        if (remaining === 0) {
            result.push(path.slice());
            return;
        }
        if (remaining < 0) {
            return;
        }
        for (let i = start; i < candidates.length; i++) {
            path.push(candidates[i]);
            backtrack(i, remaining - candidates[i], path);
            path.pop();
        }
    }

    backtrack(0, target, []);
    return result;
};
