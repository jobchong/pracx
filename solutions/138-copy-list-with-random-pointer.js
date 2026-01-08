/**
 * 138. Copy List with Random Pointer
 *
 * DO NOT look at this until you've thoroughly attempted the problem!
 */

/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *     this.val = val;
 *     this.next = next;
 *     this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    if (!head) {
        return null;
    }

    const map = new Map();
    let current = head;
    while (current) {
        map.set(current, new Node(current.val, null, null));
        current = current.next;
    }

    current = head;
    while (current) {
        const clone = map.get(current);
        clone.next = current.next ? map.get(current.next) : null;
        clone.random = current.random ? map.get(current.random) : null;
        current = current.next;
    }

    return map.get(head);
};
