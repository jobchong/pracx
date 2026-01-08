/**
 * 128. Longest Consecutive Sequence
 *
 * DO NOT look at this until you've thoroughly attempted the problem!
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const set = new Set(nums);
    let longest = 0;

    for (const num of set) {
        if (!set.has(num - 1)) {
            let current = num;
            let streak = 1;
            while (set.has(current + 1)) {
                current++;
                streak++;
            }
            longest = Math.max(longest, streak);
        }
    }

    return longest;
};
