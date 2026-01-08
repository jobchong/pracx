/**
 * 11. Container With Most Water
 *
 * DO NOT look at this until you've thoroughly attempted the problem!
 */

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let max = 0;

    while (left < right) {
        const h = Math.min(height[left], height[right]);
        max = Math.max(max, h * (right - left));
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return max;
};
