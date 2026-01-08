/**
 * 124. Binary Tree Maximum Path Sum
 *
 * DO NOT look at this until you've thoroughly attempted the problem!
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    let maxSum = -Infinity;

    function gain(node) {
        if (!node) {
            return 0;
        }
        const left = Math.max(gain(node.left), 0);
        const right = Math.max(gain(node.right), 0);
        maxSum = Math.max(maxSum, node.val + left + right);
        return node.val + Math.max(left, right);
    }

    gain(root);
    return maxSum;
};
