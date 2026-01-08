/**
 * 215. Kth Largest Element in an Array
 *
 * DO NOT look at this until you've thoroughly attempted the problem!
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    const heap = new MinHeap();
    for (const num of nums) {
        heap.push(num);
        if (heap.size() > k) {
            heap.pop();
        }
    }
    return heap.pop();
};

function MinHeap() {
    this.data = [];
}

MinHeap.prototype.size = function() {
    return this.data.length;
};

MinHeap.prototype.push = function(value) {
    this.data.push(value);
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
        if (this.data[parent] <= this.data[index]) {
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
        if (left < length && this.data[left] < this.data[smallest]) {
            smallest = left;
        }
        if (right < length && this.data[right] < this.data[smallest]) {
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
