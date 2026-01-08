/**
 * 117. Populating Next Right Pointers in Each Node II
 *
 * DO NOT look at this until you've thoroughly attempted the problem!
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if (!root) {
        return null;
    }

    const queue = [root];
    while (queue.length > 0) {
        const levelSize = queue.length;
        let prev = null;
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            if (prev) {
                prev.next = node;
            }
            prev = node;
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
        if (prev) {
            prev.next = null;
        }
    }

    return root;
};
