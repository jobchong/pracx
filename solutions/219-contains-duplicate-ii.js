/**
 * 219. Contains Duplicate II
 *
 * DO NOT look at this until you've thoroughly attempted the problem!
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const window = new Set();

    for (let i = 0; i < nums.length; i++) {
        if (window.has(nums[i])) {
            return true;
        }
        window.add(nums[i]);
        if (window.size > k) {
            window.delete(nums[i - k]);
        }
    }

    return false;
};
