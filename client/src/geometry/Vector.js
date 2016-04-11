/**
 * @param {number} degrees
 * @returns {number}
 */
function degreesToRadians(degrees) {
    return degrees * (Math.PI / 180);
}

/**
 * @param {number} radians
 * @returns {number}
 */
function radiansToDegrees(radians) {
    return radians * (180 / Math.PI);
}

/**
 * @class Vector
 */
export class Vector {
    /**
     * @param {number} size
     * @param {number} degrees
     */
    constructor(size, degrees) {
        this.size = size;
        this.degrees = degrees;
    }

    /**
     * @returns {number}
     */
    get x() {
        let radians = degreesToRadians(this.degrees);

        return Math.cos(radians).toFixed(10) * this.size;
    }

    /**
     * @returns {number}
     */
    get y() {
        let radians = degreesToRadians(this.degrees);

        return Math.sin(radians).toFixed(10) * this.size;
    }

    /**
     * @param {number} degrees
     * @returns {Vector}
     */
    rotate(degrees) {
        return new Vector(this.size, this.degrees + degrees);
    }

    /**
     * @returns {Vector}
     */
    copy() {
        return new Vector(this.size, this.degrees);
    }

    /**
     * @returns {string}
     */
    toString() {
        return `size: ${this.size}; degrees: ${this.degrees}; radians: ${degreesToRadians(this.degrees)}`;
    }

    /**
     * @returns {{size: (number|*), degrees: (number|*)}}
     */
    raw() {
        return {
            size: this.size,
            degrees: this.degrees
        };
    }

    /**
     * @param {Object} raw
     * @returns {Vector}
     */
    static createFromRaw(raw) {
        return new Vector(raw.size, raw.degrees);
    }
}

export {degreesToRadians, radiansToDegrees};
