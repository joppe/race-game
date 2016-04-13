/**
 * @class Vector
 */
export class Vector {
    /**
     * @param {number} size
     * @param {number} angle
     */
    constructor(size, angle) {
        this.size = size;
        this.angle = angle;
    }

    /**
     * @returns {number}
     */
    get x() {
        return Math.cos(this.angle.angle).toFixed(10) * this.size;
    }

    /**
     * @returns {number}
     */
    get y() {
        return Math.sin(this.angle.angle).toFixed(10) * this.size;
    }

    /**
     * @param {number} angle
     * @returns {Vector}
     */
    rotate(angle) {
        return new Vector(this.size, this.angle + angle);
    }

    /**
     * @returns {Vector}
     */
    copy() {
        return new Vector(this.size, this.angle);
    }

    /**
     * @returns {string}
     */
    toString() {
        return `size: ${this.size}; angle: ${this.angle};`;
    }

    /**
     * @returns {{size: (number|*), angle: (number|*)}}
     */
    raw() {
        return {
            size: this.size,
            angle: this.angle
        };
    }

    /**
     * @param {Object} raw
     * @returns {Vector}
     */
    static createFromRaw(raw) {
        return new Vector(raw.size, raw.angle);
    }
}
