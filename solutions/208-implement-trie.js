/**
 * 208. Implement Trie (Prefix Tree)
 *
 * DO NOT look at this until you've thoroughly attempted the problem!
 */

function TrieNode() {
    this.children = new Map();
    this.isEnd = false;
}

var Trie = function() {
    this.root = new TrieNode();
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let node = this.root;
    for (const ch of word) {
        if (!node.children.has(ch)) {
            node.children.set(ch, new TrieNode());
        }
        node = node.children.get(ch);
    }
    node.isEnd = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let node = this.root;
    for (const ch of word) {
        if (!node.children.has(ch)) {
            return false;
        }
        node = node.children.get(ch);
    }
    return node.isEnd;
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let node = this.root;
    for (const ch of prefix) {
        if (!node.children.has(ch)) {
            return false;
        }
        node = node.children.get(ch);
    }
    return true;
};
