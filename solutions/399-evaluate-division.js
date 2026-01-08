/**
 * 399. Evaluate Division
 *
 * DO NOT look at this until you've thoroughly attempted the problem!
 */

/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
    const graph = new Map();

    function addEdge(a, b, value) {
        if (!graph.has(a)) {
            graph.set(a, []);
        }
        graph.get(a).push([b, value]);
    }

    for (let i = 0; i < equations.length; i++) {
        const [a, b] = equations[i];
        const value = values[i];
        addEdge(a, b, value);
        addEdge(b, a, 1 / value);
    }

    function dfs(start, end, visited) {
        if (!graph.has(start)) {
            return -1;
        }
        if (start === end) {
            return 1;
        }
        visited.add(start);
        for (const [next, weight] of graph.get(start)) {
            if (visited.has(next)) {
                continue;
            }
            const res = dfs(next, end, visited);
            if (res !== -1) {
                return res * weight;
            }
        }
        return -1;
    }

    return queries.map(([a, b]) => {
        return dfs(a, b, new Set());
    });
};
