/**
 * 637. Average of Levels in Binary Tree
 *
 * DO NOT look at this until you've thoroughly attempted the problem!
 */

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    if (!root) {
        return [];
    }

    const result = [];
    const queue = [root];

    while (queue.length > 0) {
        const size = queue.length;
        let sum = 0;
        for (let i = 0; i < size; i++) {
            const node = queue.shift();
            sum += node.val;
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
        result.push(sum / size);
    }

    return result;
};
