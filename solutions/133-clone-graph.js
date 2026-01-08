/**
 * 133. Clone Graph
 *
 * DO NOT look at this until you've thoroughly attempted the problem!
 */

/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    if (!node) {
        return null;
    }

    const map = new Map();

    function dfs(current) {
        if (map.has(current)) {
            return map.get(current);
        }
        const copy = new Node(current.val);
        map.set(current, copy);
        copy.neighbors = current.neighbors.map(nei => dfs(nei));
        return copy;
    }

    return dfs(node);
};
