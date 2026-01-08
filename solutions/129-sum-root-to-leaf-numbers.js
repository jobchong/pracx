/**
 * 129. Sum Root to Leaf Numbers
 *
 * DO NOT look at this until you've thoroughly attempted the problem!
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {
    function dfs(node, current) {
        if (!node) {
            return 0;
        }
        const next = current * 10 + node.val;
        if (!node.left && !node.right) {
            return next;
        }
        return dfs(node.left, next) + dfs(node.right, next);
    }

    return dfs(root, 0);
};
