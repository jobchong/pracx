/**
 * 373. Find K Pairs with Smallest Sums
 *
 * DO NOT look at this until you've thoroughly attempted the problem!
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
    if (nums1.length === 0 || nums2.length === 0 || k === 0) {
        return [];
    }

    const heap = new MinHeap();
    for (let i = 0; i < Math.min(nums1.length, k); i++) {
        heap.push([nums1[i] + nums2[0], i, 0]);
    }

    const result = [];
    while (heap.size() > 0 && result.length < k) {
        const [sum, i, j] = heap.pop();
        result.push([nums1[i], nums2[j]]);
        if (j + 1 < nums2.length) {
            heap.push([nums1[i] + nums2[j + 1], i, j + 1]);
        }
    }

    return result;
};

function MinHeap() {
    this.data = [];
}

MinHeap.prototype.size = function() {
    return this.data.length;
};

MinHeap.prototype.push = function(item) {
    this.data.push(item);
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
        if (this.data[parent][0] <= this.data[index][0]) {
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
        if (left < length && this.data[left][0] < this.data[smallest][0]) {
            smallest = left;
        }
        if (right < length && this.data[right][0] < this.data[smallest][0]) {
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
