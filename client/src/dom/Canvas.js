/**
 * @class Canvas
 */
export class Canvas {
    /**
     * @param {number} width
     * @param {number} height
     */
    constructor(width, height) {
        this.width = width;
        this.height = height;

        this.el = document.createElement('canvas');

        this.el.setAttribute('width', String(width));
        this.el.setAttribute('height', String(height));
    }

    /**
     * @returns {CanvasRenderingContext2D}
     */
    getContext() {
        return this.el.getContext('2d');
    }

    /**
     * @returns {number}
     */
    getWidth() {
        return this.width;
    }

    /**
     * @returns {number}
     */
    getHeight() {
        return this.height;
    }

    /**
     * @returns {Element}
     */
    getElement() {
        return this.el;
    }

    /**
     * @returns {Canvas}
     */
    clear() {
        this.getContext().clearRect(0, 0, this.width, this.height);

        return this;
    }

    /**
     * @param {HTMLElement} target
     * @returns {Canvas}
     */
    appendTo(target) {
        target.appendChild(this.el);

        return this;
    }

    /**
     * @param {Point} position
     * @param {number} width
     * @param {number} height
     * @returns {CanvasPixelArray}
     */
    getImageData(position, width, height) {
        let imageData = this.getContext().getImageData(position.x, position.y, width, height);

        return imageData.data;
    }
}
