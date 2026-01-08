/**
 * 222. Count Complete Tree Nodes
 *
 * DO NOT look at this until you've thoroughly attempted the problem!
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function(root) {
    if (!root) {
        return 0;
    }

    const leftDepth = getLeftDepth(root);
    const rightDepth = getRightDepth(root);

    if (leftDepth === rightDepth) {
        return (1 << leftDepth) - 1;
    }

    return 1 + countNodes(root.left) + countNodes(root.right);
};

function getLeftDepth(node) {
    let depth = 0;
    while (node) {
        depth++;
        node = node.left;
    }
    return depth;
}

function getRightDepth(node) {
    let depth = 0;
    while (node) {
        depth++;
        node = node.right;
    }
    return depth;
}
