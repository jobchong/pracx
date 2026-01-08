/**
 * 103. Binary Tree Zigzag Level Order Traversal
 *
 * DO NOT look at this until you've thoroughly attempted the problem!
 */

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if (!root) {
        return [];
    }

    const result = [];
    const queue = [root];
    let leftToRight = true;

    while (queue.length > 0) {
        const size = queue.length;
        const level = new Array(size);
        for (let i = 0; i < size; i++) {
            const node = queue.shift();
            const idx = leftToRight ? i : size - 1 - i;
            level[idx] = node.val;
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
        result.push(level);
        leftToRight = !leftToRight;
    }

    return result;
};
