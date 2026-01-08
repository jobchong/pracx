/**
 * 198. House Robber
 *
 * DO NOT look at this until you've thoroughly attempted the problem!
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let prev1 = 0;
    let prev2 = 0;

    for (const num of nums) {
        const temp = prev1;
        prev1 = Math.max(prev1, prev2 + num);
        prev2 = temp;
    }

    return prev1;
};
