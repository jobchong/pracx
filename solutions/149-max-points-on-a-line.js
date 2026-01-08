/**
 * 149. Max Points on a Line
 *
 * DO NOT look at this until you've thoroughly attempted the problem!
 */

/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
    if (points.length <= 2) {
        return points.length;
    }

    let result = 0;

    for (let i = 0; i < points.length; i++) {
        const map = new Map();
        let same = 1;
        let localMax = 0;

        for (let j = i + 1; j < points.length; j++) {
            let dx = points[j][0] - points[i][0];
            let dy = points[j][1] - points[i][1];

            if (dx === 0 && dy === 0) {
                same++;
                continue;
            }

            const g = gcd(dx, dy);
            dx /= g;
            dy /= g;

            if (dx < 0) {
                dx = -dx;
                dy = -dy;
            } else if (dx === 0) {
                dy = dy > 0 ? 1 : -1;
            }

            const key = dy + '/' + dx;
            const count = (map.get(key) || 0) + 1;
            map.set(key, count);
            localMax = Math.max(localMax, count);
        }

        result = Math.max(result, localMax + same);
    }

    return result;
};

function gcd(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);
    while (b !== 0) {
        const temp = a % b;
        a = b;
        b = temp;
    }
    return a;
}
