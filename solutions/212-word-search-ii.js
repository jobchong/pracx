/**
 * 212. Word Search II
 *
 * DO NOT look at this until you've thoroughly attempted the problem!
 */

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
    const root = new TrieNode();
    for (const word of words) {
        let node = root;
        for (const ch of word) {
            if (!node.children.has(ch)) {
                node.children.set(ch, new TrieNode());
            }
            node = node.children.get(ch);
        }
        node.word = word;
    }

    const result = [];
    const rows = board.length;
    const cols = board[0].length;

    function dfs(r, c, node) {
        if (r < 0 || r >= rows || c < 0 || c >= cols) {
            return;
        }
        const ch = board[r][c];
        if (ch === '#' || !node.children.has(ch)) {
            return;
        }

        const next = node.children.get(ch);
        if (next.word) {
            result.push(next.word);
            next.word = null;
        }

        board[r][c] = '#';
        dfs(r + 1, c, next);
        dfs(r - 1, c, next);
        dfs(r, c + 1, next);
        dfs(r, c - 1, next);
        board[r][c] = ch;

        if (next.children.size === 0) {
            node.children.delete(ch);
        }
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            dfs(r, c, root);
        }
    }

    return result;
};

function TrieNode() {
    this.children = new Map();
    this.word = null;
}
