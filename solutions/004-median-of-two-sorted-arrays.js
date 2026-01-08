/**
 * 4. Median of Two Sorted Arrays
 *
 * DO NOT look at this until you've thoroughly attempted the problem!
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    if (nums1.length > nums2.length) {
        return findMedianSortedArrays(nums2, nums1);
    }

    const m = nums1.length;
    const n = nums2.length;
    let left = 0;
    let right = m;

    while (left <= right) {
        const i = Math.floor((left + right) / 2);
        const j = Math.floor((m + n + 1) / 2) - i;

        const maxLeftA = i === 0 ? -Infinity : nums1[i - 1];
        const minRightA = i === m ? Infinity : nums1[i];
        const maxLeftB = j === 0 ? -Infinity : nums2[j - 1];
        const minRightB = j === n ? Infinity : nums2[j];

        if (maxLeftA <= minRightB && maxLeftB <= minRightA) {
            if ((m + n) % 2 === 0) {
                return (Math.max(maxLeftA, maxLeftB) + Math.min(minRightA, minRightB)) / 2;
            }
            return Math.max(maxLeftA, maxLeftB);
        }

        if (maxLeftA > minRightB) {
            right = i - 1;
        } else {
            left = i + 1;
        }
    }

    return 0;
};
