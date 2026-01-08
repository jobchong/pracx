/**
 * 211. Design Add and Search Words Data Structure
 *
 * DO NOT look at this until you've thoroughly attempted the problem!
 */

function WordTrieNode() {
    this.children = new Map();
    this.isEnd = false;
}

var WordDictionary = function() {
    this.root = new WordTrieNode();
};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    let node = this.root;
    for (const ch of word) {
        if (!node.children.has(ch)) {
            node.children.set(ch, new WordTrieNode());
        }
        node = node.children.get(ch);
    }
    node.isEnd = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    function dfs(node, index) {
        if (index === word.length) {
            return node.isEnd;
        }
        const ch = word[index];
        if (ch === '.') {
            for (const child of node.children.values()) {
                if (dfs(child, index + 1)) {
                    return true;
                }
            }
            return false;
        }
        if (!node.children.has(ch)) {
            return false;
        }
        return dfs(node.children.get(ch), index + 1);
    }

    return dfs(this.root, 0);
};
