/**
 * 909. Snakes and Ladders
 *
 * DO NOT look at this until you've thoroughly attempted the problem!
 */

/**
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLadders = function(board) {
    const n = board.length;
    const target = n * n;

    function getPosition(num) {
        const r = Math.floor((num - 1) / n);
        const c = (num - 1) % n;
        const row = n - 1 - r;
        const col = r % 2 === 0 ? c : n - 1 - c;
        return [row, col];
    }

    const queue = [1];
    const visited = new Set([1]);
    let moves = 0;

    while (queue.length > 0) {
        const size = queue.length;
        for (let i = 0; i < size; i++) {
            const current = queue.shift();
            if (current === target) {
                return moves;
            }
            for (let step = 1; step <= 6; step++) {
                let next = current + step;
                if (next > target) {
                    break;
                }
                const [r, c] = getPosition(next);
                if (board[r][c] !== -1) {
                    next = board[r][c];
                }
                if (!visited.has(next)) {
                    visited.add(next);
                    queue.push(next);
                }
            }
        }
        moves++;
    }

    return -1;
};
