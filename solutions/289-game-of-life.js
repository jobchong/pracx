/**
 * 289. Game of Life
 *
 * DO NOT look at this until you've thoroughly attempted the problem!
 */

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    const rows = board.length;
    const cols = board[0].length;

    const directions = [
        [-1, -1], [-1, 0], [-1, 1],
        [0, -1], [0, 1],
        [1, -1], [1, 0], [1, 1]
    ];

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            let liveNeighbors = 0;
            for (const [dr, dc] of directions) {
                const nr = r + dr;
                const nc = c + dc;
                if (nr < 0 || nr >= rows || nc < 0 || nc >= cols) {
                    continue;
                }
                if (board[nr][nc] === 1 || board[nr][nc] === 2) {
                    liveNeighbors++;
                }
            }

            if (board[r][c] === 1 && (liveNeighbors < 2 || liveNeighbors > 3)) {
                board[r][c] = 2; // live -> dead
            } else if (board[r][c] === 0 && liveNeighbors === 3) {
                board[r][c] = -1; // dead -> live
            }
        }
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (board[r][c] === 2) {
                board[r][c] = 0;
            } else if (board[r][c] === -1) {
                board[r][c] = 1;
            }
        }
    }
};
