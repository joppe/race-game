import {Loader} from './../image/Loader.js';

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
     * @param {HTMLElement} target
     * @returns {Canvas}
     */
    appendTo(target) {
        target.appendChild(this.el);

        return this;
    }

    /**
     * @param {Point} point
     * @param {number} width
     * @param {number} height
     * @returns {CanvasPixelArray}
     */
    getImageData(point, width, height) {
        let imageData = this.getContext().getImageData(point.x, point.y, width, height);

        return imageData.data;
    }

    /**
     * @param {string} src
     * @param {number} x
     * @param {number} y
     * @param {number} [width]
     * @param {number} [height]
     * @param {number} [sx]
     * @param {number} [xy]
     * @param {number} [sWidth]
     * @param {number} [sHeight]
     * @returns {Promise}
     */
    drawImage(src, x, y, width, height, sx, xy, sWidth, sHeight) {
        return new Promise((resolve, reject) => {
            Loader
                .load(src)
                .then(() => {
                    let image = new Image();

                    image.setAttribute('src', src);

                    this.getContext().drawImage(image, x, y, width, height, sx, xy, sWidth, sHeight);

                    resolve();
                })
                .catch(reject)
            ;
        });
    }
}
