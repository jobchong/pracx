/**
 * 433. Minimum Genetic Mutation
 *
 * DO NOT look at this until you've thoroughly attempted the problem!
 */

/**
 * @param {string} startGene
 * @param {string} endGene
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(startGene, endGene, bank) {
    const bankSet = new Set(bank);
    if (!bankSet.has(endGene)) {
        return -1;
    }

    const genes = ['A', 'C', 'G', 'T'];
    const queue = [startGene];
    const visited = new Set([startGene]);
    let steps = 0;

    while (queue.length > 0) {
        const size = queue.length;
        for (let i = 0; i < size; i++) {
            const current = queue.shift();
            if (current === endGene) {
                return steps;
            }
            const chars = current.split('');
            for (let j = 0; j < chars.length; j++) {
                const original = chars[j];
                for (const g of genes) {
                    if (g === original) {
                        continue;
                    }
                    chars[j] = g;
                    const next = chars.join('');
                    if (bankSet.has(next) && !visited.has(next)) {
                        visited.add(next);
                        queue.push(next);
                    }
                }
                chars[j] = original;
            }
        }
        steps++;
    }

    return -1;
};
