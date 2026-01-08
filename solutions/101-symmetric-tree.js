/**
 * 101. Symmetric Tree
 *
 * DO NOT look at this until you've thoroughly attempted the problem!
 */

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    return isMirror(root, root);
};

function isMirror(a, b) {
    if (!a && !b) {
        return true;
    }
    if (!a || !b || a.val !== b.val) {
        return false;
    }
    return isMirror(a.left, b.right) && isMirror(a.right, b.left);
}
