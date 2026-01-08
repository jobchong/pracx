/**
 * 295. Find Median from Data Stream
 *
 * DO NOT look at this until you've thoroughly attempted the problem!
 */

var MedianFinder = function() {
    this.low = new MaxHeap();
    this.high = new MinHeap();
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    if (this.low.size() === 0 || num <= this.low.peek()) {
        this.low.push(num);
    } else {
        this.high.push(num);
    }

    if (this.low.size() > this.high.size() + 1) {
        this.high.push(this.low.pop());
    } else if (this.high.size() > this.low.size()) {
        this.low.push(this.high.pop());
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if (this.low.size() > this.high.size()) {
        return this.low.peek();
    }
    return (this.low.peek() + this.high.peek()) / 2;
};

function MinHeap() {
    this.data = [];
}

MinHeap.prototype.size = function() {
    return this.data.length;
};

MinHeap.prototype.peek = function() {
    return this.data[0];
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

function MaxHeap() {
    this.data = [];
}

MaxHeap.prototype.size = function() {
    return this.data.length;
};

MaxHeap.prototype.peek = function() {
    return this.data[0];
};

MaxHeap.prototype.push = function(value) {
    this.data.push(value);
    this.bubbleUp(this.data.length - 1);
};

MaxHeap.prototype.pop = function() {
    const top = this.data[0];
    const last = this.data.pop();
    if (this.data.length > 0) {
        this.data[0] = last;
        this.bubbleDown(0);
    }
    return top;
};

MaxHeap.prototype.bubbleUp = function(index) {
    while (index > 0) {
        const parent = Math.floor((index - 1) / 2);
        if (this.data[parent] >= this.data[index]) {
            break;
        }
        const temp = this.data[parent];
        this.data[parent] = this.data[index];
        this.data[index] = temp;
        index = parent;
    }
};

MaxHeap.prototype.bubbleDown = function(index) {
    const length = this.data.length;
    while (true) {
        let largest = index;
        const left = index * 2 + 1;
        const right = index * 2 + 2;
        if (left < length && this.data[left] > this.data[largest]) {
            largest = left;
        }
        if (right < length && this.data[right] > this.data[largest]) {
            largest = right;
        }
        if (largest === index) {
            break;
        }
        const temp = this.data[largest];
        this.data[largest] = this.data[index];
        this.data[index] = temp;
        index = largest;
    }
};
