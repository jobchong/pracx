/**
 * 80. Remove Duplicates from Sorted Array II
 *
 * DO NOT look at this until you've thoroughly attempted the problem!
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let k = 0;

    for (const num of nums) {
        if (k < 2 || num !== nums[k - 2]) {
            nums[k++] = num;
        }
    }

    return k;
};
