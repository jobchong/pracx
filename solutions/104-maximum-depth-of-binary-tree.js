/**
 * 104. Maximum Depth of Binary Tree
 *
 * DO NOT look at this until you've thoroughly attempted the problem!
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (!root) {
        return 0;
    }
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};
