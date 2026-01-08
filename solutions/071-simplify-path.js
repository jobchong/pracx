/**
 * 71. Simplify Path
 *
 * DO NOT look at this until you've thoroughly attempted the problem!
 */

/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const parts = path.split('/');
    const stack = [];

    for (const part of parts) {
        if (part === '' || part === '.') {
            continue;
        }
        if (part === '..') {
            stack.pop();
        } else {
            stack.push(part);
        }
    }

    return '/' + stack.join('/');
};
