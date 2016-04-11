/**
 * @class Point
 */
export class Point {
    /**
     * @param {number} x
     * @param {number} y
     */
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    /**
     * @param {Point} point
     * @returns {Point}
     */
    add(point) {
        return new Point(this.x + point.x, this.y + point.y);
    }

    /**
     * @returns {Point}
     */
    copy() {
        return new Point(this.x, this.y);
    }

    /**
     * @param {Point} point
     * @returns {number}
     */
    distance(point) {
        let dx = this.x - point.x,
            dy = this.y - point.y;

        return Math.square(dx * dx + dy * dy);
    }

    /**
     * @returns {string}
     */
    toString() {
        return `x: ${this.x}; y: ${this.y}`;
    }

    /**
     * @returns {{x: (number|*), y: (number|*)}}
     */
    raw() {
        return {
            x: this.x,
            y: this.y
        };
    }

    /**
     * @param {Object} raw
     * @returns {Point}
     */
    static createFromRaw(raw) {
        return new Point(raw.x, raw.y);
    }
}
