/**
 * 25. Reverse Nodes in k-Group
 *
 * DO NOT look at this until you've thoroughly attempted the problem!
 */

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    const dummy = new ListNode(0, head);
    let groupPrev = dummy;

    while (true) {
        const kth = getKth(groupPrev, k);
        if (!kth) {
            break;
        }
        const groupNext = kth.next;

        let prev = groupNext;
        let curr = groupPrev.next;
        while (curr !== groupNext) {
            const temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
        }

        const newGroupHead = prev;
        const newGroupTail = groupPrev.next;
        groupPrev.next = newGroupHead;
        groupPrev = newGroupTail;
    }

    return dummy.next;
};

function getKth(node, k) {
    while (node && k > 0) {
        node = node.next;
        k--;
    }
    return node;
}
