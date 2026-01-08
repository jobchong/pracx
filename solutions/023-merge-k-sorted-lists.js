/**
 * 23. Merge k Sorted Lists
 *
 * DO NOT look at this until you've thoroughly attempted the problem!
 */

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    const heap = new MinHeap();
    for (const node of lists) {
        if (node) {
            heap.push(node);
        }
    }

    const dummy = new ListNode(0);
    let tail = dummy;

    while (heap.size() > 0) {
        const node = heap.pop();
        tail.next = node;
        tail = tail.next;
        if (node.next) {
            heap.push(node.next);
        }
    }

    return dummy.next;
};

function MinHeap() {
    this.data = [];
}

MinHeap.prototype.size = function() {
    return this.data.length;
};

MinHeap.prototype.push = function(node) {
    this.data.push(node);
    this.bubbleUp(this.data.length - 1);
};

MinHeap.prototype.pop = function() {
    const top = this.data[0];
    const last = this.data.pop();
    if (this.data.length > 0) {
        this.data[0] = last;
        this.bubbleDown(0);
    }
    return top;
};

MinHeap.prototype.bubbleUp = function(index) {
    while (index > 0) {
        const parent = Math.floor((index - 1) / 2);
        if (this.data[parent].val <= this.data[index].val) {
            break;
        }
        const temp = this.data[parent];
        this.data[parent] = this.data[index];
        this.data[index] = temp;
        index = parent;
    }
};

MinHeap.prototype.bubbleDown = function(index) {
    const length = this.data.length;
    while (true) {
        let smallest = index;
        const left = index * 2 + 1;
        const right = index * 2 + 2;
        if (left < length && this.data[left].val < this.data[smallest].val) {
            smallest = left;
        }
        if (right < length && this.data[right].val < this.data[smallest].val) {
            smallest = right;
        }
        if (smallest === index) {
            break;
        }
        const temp = this.data[smallest];
        this.data[smallest] = this.data[index];
        this.data[index] = temp;
        index = smallest;
    }
};
