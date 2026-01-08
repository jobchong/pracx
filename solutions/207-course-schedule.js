/**
 * 207. Course Schedule
 *
 * DO NOT look at this until you've thoroughly attempted the problem!
 */

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
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

    let taken = 0;
    while (queue.length > 0) {
        const node = queue.shift();
        taken++;
        for (const next of graph[node]) {
            indegree[next]--;
            if (indegree[next] === 0) {
                queue.push(next);
            }
        }
    }

    return taken === numCourses;
};
