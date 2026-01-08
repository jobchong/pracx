/**
 * 105. Construct Binary Tree from Preorder and Inorder Traversal
 *
 * DO NOT look at this until you've thoroughly attempted the problem!
 */

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    const indexMap = new Map();
    for (let i = 0; i < inorder.length; i++) {
        indexMap.set(inorder[i], i);
    }
    let preIndex = 0;

    function helper(left, right) {
        if (left > right) {
            return null;
        }
        const rootVal = preorder[preIndex++];
        const root = new TreeNode(rootVal);
        const idx = indexMap.get(rootVal);
        root.left = helper(left, idx - 1);
        root.right = helper(idx + 1, right);
        return root;
    }

    return helper(0, inorder.length - 1);
};
