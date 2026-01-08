/**
 * 136. Single Number
 *
 * DO NOT look at this until you've thoroughly attempted the problem!
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let result = 0;
    for (const num of nums) {
        result ^= num;
    }
    return result;
};
