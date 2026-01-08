/**
 * 148. Sort List
 *
 * DO NOT look at this until you've thoroughly attempted the problem!
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
    if (!head || !head.next) {
        return head;
    }

    let slow = head;
    let fast = head;
    let prev = null;

    while (fast && fast.next) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    prev.next = null;

    const left = sortList(head);
    const right = sortList(slow);
    return mergeLists(left, right);
};

function mergeLists(a, b) {
    const dummy = new ListNode(0);
    let tail = dummy;

    while (a && b) {
        if (a.val <= b.val) {
            tail.next = a;
            a = a.next;
        } else {
            tail.next = b;
            b = b.next;
        }
        tail = tail.next;
    }

    tail.next = a || b;
    return dummy.next;
}
