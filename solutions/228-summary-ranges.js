/**
 * 228. Summary Ranges
 *
 * DO NOT look at this until you've thoroughly attempted the problem!
 */

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    const result = [];
    let i = 0;

    while (i < nums.length) {
        let start = nums[i];
        let end = start;
        while (i + 1 < nums.length && nums[i + 1] === nums[i] + 1) {
            i++;
            end = nums[i];
        }
        if (start === end) {
            result.push(String(start));
        } else {
            result.push(start + '->' + end);
        }
        i++;
    }

    return result;
};
