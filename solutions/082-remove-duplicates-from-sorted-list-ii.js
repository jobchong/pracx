/**
 * 82. Remove Duplicates from Sorted List II
 *
 * DO NOT look at this until you've thoroughly attempted the problem!
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    const dummy = new ListNode(0, head);
    let prev = dummy;
    let current = head;

    while (current) {
        let duplicate = false;
        while (current.next && current.val === current.next.val) {
            duplicate = true;
            current = current.next;
        }
        if (duplicate) {
            prev.next = current.next;
        } else {
            prev = prev.next;
        }
        current = current.next;
    }

    return dummy.next;
};
