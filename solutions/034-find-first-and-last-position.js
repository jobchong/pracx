/**
 * 34. Find First and Last Position of Element in Sorted Array
 *
 * DO NOT look at this until you've thoroughly attempted the problem!
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    function findLeft() {
        let left = 0;
        let right = nums.length - 1;
        let index = -1;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (nums[mid] >= target) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
            if (nums[mid] === target) {
                index = mid;
            }
        }
        return index;
    }

    function findRight() {
        let left = 0;
        let right = nums.length - 1;
        let index = -1;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (nums[mid] <= target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
            if (nums[mid] === target) {
                index = mid;
            }
        }
        return index;
    }

    return [findLeft(), findRight()];
};
