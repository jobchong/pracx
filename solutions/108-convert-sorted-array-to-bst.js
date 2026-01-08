/**
 * 108. Convert Sorted Array to Binary Search Tree
 *
 * DO NOT look at this until you've thoroughly attempted the problem!
 */

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    function build(left, right) {
        if (left > right) {
            return null;
        }
        const mid = Math.floor((left + right) / 2);
        const node = new TreeNode(nums[mid]);
        node.left = build(left, mid - 1);
        node.right = build(mid + 1, right);
        return node;
    }

    return build(0, nums.length - 1);
};
