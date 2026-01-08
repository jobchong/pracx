/**
 * 114. Flatten Binary Tree to Linked List
 *
 * DO NOT look at this until you've thoroughly attempted the problem!
 */

/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    if (!root) {
        return;
    }

    const stack = [root];
    let prev = null;

    while (stack.length > 0) {
        const node = stack.pop();
        if (prev) {
            prev.left = null;
            prev.right = node;
        }
        if (node.right) {
            stack.push(node.right);
        }
        if (node.left) {
            stack.push(node.left);
        }
        prev = node;
    }
};
