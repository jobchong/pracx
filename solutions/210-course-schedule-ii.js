/**
 * 210. Course Schedule II
 *
 * DO NOT look at this until you've thoroughly attempted the problem!
 */

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    const indegree = new Array(numCourses).fill(0);
    const graph = Array.from({ length: numCourses }, () => []);

    for (const [course, pre] of prerequisites) {
        graph[pre].push(course);
        indegree[course]++;
    }

    const queue = [];
    for (let i = 0; i < numCourses; i++) {
        if (indegree[i] === 0) {
            queue.push(i);
        }
    }

    const order = [];
    while (queue.length > 0) {
        const node = queue.shift();
        order.push(node);
        for (const next of graph[node]) {
            indegree[next]--;
            if (indegree[next] === 0) {
                queue.push(next);
            }
        }
    }

    return order.length === numCourses ? order : [];
};
