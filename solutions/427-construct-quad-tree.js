/**
 * 427. Construct Quad Tree
 *
 * DO NOT look at this until you've thoroughly attempted the problem!
 */

/**
 * // Definition for a QuadTree node.
 * function Node(val, isLeaf, topLeft, topRight, bottomLeft, bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */

/**
 * @param {number[][]} grid
 * @return {Node}
 */
var construct = function(grid) {
    function build(r0, c0, size) {
        let same = true;
        const first = grid[r0][c0];
        for (let r = r0; r < r0 + size; r++) {
            for (let c = c0; c < c0 + size; c++) {
                if (grid[r][c] !== first) {
                    same = false;
                    break;
                }
            }
            if (!same) {
                break;
            }
        }

        if (same) {
            return new Node(first === 1, true, null, null, null, null);
        }

        const half = size / 2;
        const topLeft = build(r0, c0, half);
        const topRight = build(r0, c0 + half, half);
        const bottomLeft = build(r0 + half, c0, half);
        const bottomRight = build(r0 + half, c0 + half, half);
        return new Node(true, false, topLeft, topRight, bottomLeft, bottomRight);
    }

    return build(0, 0, grid.length);
};
