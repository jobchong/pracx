/**
 * 92. Reverse Linked List II
 *
 * DO NOT look at this until you've thoroughly attempted the problem!
 */

/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    if (!head || left === right) {
        return head;
    }

    const dummy = new ListNode(0, head);
    let prev = dummy;

    for (let i = 1; i < left; i++) {
        prev = prev.next;
    }

    let current = prev.next;
    for (let i = 0; i < right - left; i++) {
        const next = current.next;
        current.next = next.next;
        next.next = prev.next;
        prev.next = next;
    }

    return dummy.next;
};
