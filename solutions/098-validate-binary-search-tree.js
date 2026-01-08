/**
 * 98. Validate Binary Search Tree
 *
 * DO NOT look at this until you've thoroughly attempted the problem!
 */

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    function validate(node, low, high) {
        if (!node) {
            return true;
        }
        if (node.val <= low || node.val >= high) {
            return false;
        }
        return validate(node.left, low, node.val) && validate(node.right, node.val, high);
    }

    return validate(root, -Infinity, Infinity);
};
