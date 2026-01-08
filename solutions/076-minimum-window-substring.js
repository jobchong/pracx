/**
 * 76. Minimum Window Substring
 *
 * DO NOT look at this until you've thoroughly attempted the problem!
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if (t.length === 0 || s.length === 0) {
        return "";
    }

    const need = new Map();
    for (const ch of t) {
        need.set(ch, (need.get(ch) || 0) + 1);
    }

    let have = 0;
    const needCount = need.size;
    const window = new Map();
    let left = 0;
    let best = [Infinity, 0, 0];

    for (let right = 0; right < s.length; right++) {
        const ch = s[right];
        window.set(ch, (window.get(ch) || 0) + 1);
        if (need.has(ch) && window.get(ch) === need.get(ch)) {
            have++;
        }

        while (have === needCount) {
            if (right - left + 1 < best[0]) {
                best = [right - left + 1, left, right];
            }
            const leftChar = s[left];
            window.set(leftChar, window.get(leftChar) - 1);
            if (need.has(leftChar) && window.get(leftChar) < need.get(leftChar)) {
                have--;
            }
            left++;
        }
    }

    return best[0] === Infinity ? "" : s.slice(best[1], best[2] + 1);
};
