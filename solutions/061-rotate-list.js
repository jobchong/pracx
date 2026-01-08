/**
 * 61. Rotate List
 *
 * DO NOT look at this until you've thoroughly attempted the problem!
 */

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (!head || k === 0) {
        return head;
    }

    let length = 1;
    let tail = head;
    while (tail.next) {
        tail = tail.next;
        length++;
    }

    k %= length;
    if (k === 0) {
        return head;
    }

    tail.next = head;
    let steps = length - k;
    let newTail = head;
    for (let i = 1; i < steps; i++) {
        newTail = newTail.next;
    }

    const newHead = newTail.next;
    newTail.next = null;
    return newHead;
};
