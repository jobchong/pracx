/**
 * 380. Insert Delete GetRandom O(1)
 *
 * DO NOT look at this until you've thoroughly attempted the problem!
 */

var RandomizedSet = function() {
    this.values = [];
    this.indices = new Map();
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (this.indices.has(val)) {
        return false;
    }
    this.indices.set(val, this.values.length);
    this.values.push(val);
    return true;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (!this.indices.has(val)) {
        return false;
    }

    const idx = this.indices.get(val);
    const last = this.values[this.values.length - 1];
    this.values[idx] = last;
    this.indices.set(last, idx);

    this.values.pop();
    this.indices.delete(val);

    return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    const idx = Math.floor(Math.random() * this.values.length);
    return this.values[idx];
};
