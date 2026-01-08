/**
 * 106. Construct Binary Tree from Inorder and Postorder Traversal
 *
 * DO NOT look at this until you've thoroughly attempted the problem!
 */

/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    const indexMap = new Map();
    for (let i = 0; i < inorder.length; i++) {
        indexMap.set(inorder[i], i);
    }
    let postIndex = postorder.length - 1;

    function helper(left, right) {
        if (left > right) {
            return null;
        }
        const rootVal = postorder[postIndex--];
        const root = new TreeNode(rootVal);
        const idx = indexMap.get(rootVal);
        root.right = helper(idx + 1, right);
        root.left = helper(left, idx - 1);
        return root;
    }

    return helper(0, inorder.length - 1);
};
