import {Loader} from './../../image/Loader.js';

/**
 * @class CanvasImage
 */
export class CanvasImage {
    /**
     * @param {CanvasRenderingContext2D} canvas
     * @param {string} src
     */
    constructor(canvas, src) {
        this.loaded = false;
        this.canvas = canvas;
        this.src = src;
    }

    /**
     * @returns {Promise}
     */
    preload() {
        return new Promise((resolve, reject) => {
            if (true === this.loaded) {
                resolve();
            } else {
                Loader
                    .load(this.src)
                    .then(() => {
                        this.loaded = true;

                        resolve();
                    })
                    .catch(reject)
                ;
            }
        });
    }

    /**
     * @param {Array} properties
     */
    draw(...properties) {
        if (false === this.loaded) {
            throw new Error(`Image "${this.src}" must be preloaded first`);
        }

        let image = new Image();

        image.setAttribute('src', this.src);

        this.context.drawImage(image, ...properties);
    }
}
