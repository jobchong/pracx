/**
 * 918. Maximum Sum Circular Subarray
 *
 * DO NOT look at this until you've thoroughly attempted the problem!
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function(nums) {
    let total = 0;
    let maxSum = nums[0];
    let currentMax = 0;
    let minSum = nums[0];
    let currentMin = 0;

    for (const num of nums) {
        total += num;
        currentMax = Math.max(num, currentMax + num);
        maxSum = Math.max(maxSum, currentMax);

        currentMin = Math.min(num, currentMin + num);
        minSum = Math.min(minSum, currentMin);
    }

    if (maxSum < 0) {
        return maxSum;
    }

    return Math.max(maxSum, total - minSum);
};
