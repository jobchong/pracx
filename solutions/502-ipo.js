/**
 * 502. IPO
 *
 * DO NOT look at this until you've thoroughly attempted the problem!
 */

/**
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @return {number}
 */
var findMaximizedCapital = function(k, w, profits, capital) {
    const projects = profits.map((profit, i) => [capital[i], profit]);
    projects.sort((a, b) => a[0] - b[0]);

    const maxHeap = new MaxHeap();
    let idx = 0;

    for (let i = 0; i < k; i++) {
        while (idx < projects.length && projects[idx][0] <= w) {
            maxHeap.push(projects[idx][1]);
            idx++;
        }
        if (maxHeap.size() === 0) {
            break;
        }
        w += maxHeap.pop();
    }

    return w;
};

function MaxHeap() {
    this.data = [];
}

MaxHeap.prototype.size = function() {
    return this.data.length;
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
