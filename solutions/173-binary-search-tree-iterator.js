/**
 * 173. Binary Search Tree Iterator
 *
 * DO NOT look at this until you've thoroughly attempted the problem!
 */

/**
 * @param {TreeNode} root
 */
var BSTIterator = function(root) {
    this.stack = [];
    this.pushLeft(root);
};

BSTIterator.prototype.pushLeft = function(node) {
    while (node) {
        this.stack.push(node);
        node = node.left;
    }
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    const node = this.stack.pop();
    if (node.right) {
        this.pushLeft(node.right);
    }
    return node.val;
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    return this.stack.length > 0;
};
