/**
 * 5. Longest Palindromic Substring
 *
 * DO NOT look at this until you've thoroughly attempted the problem!
 */

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let start = 0;
    let end = 0;

    function expand(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return [left + 1, right - 1];
    }

    for (let i = 0; i < s.length; i++) {
        const [l1, r1] = expand(i, i);
        if (r1 - l1 > end - start) {
            start = l1;
            end = r1;
        }
        const [l2, r2] = expand(i, i + 1);
        if (r2 - l2 > end - start) {
            start = l2;
            end = r2;
        }
    }

    return s.slice(start, end + 1);
};
