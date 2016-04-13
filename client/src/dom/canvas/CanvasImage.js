import {Listenable} from './../../event/Listenable.js';
import {Loader} from './../../image/Loader.js';

/**
 * @class CanvasImage
 */
export class CanvasImage extends Listenable {
    /**
     * @param {CanvasRenderingContext2D} canvas
     * @param {string} src
     */
    constructor(canvas, src) {
        super();

        this.loaded = false;
        this.canvas = canvas;
        this.src = src;
    }

    /**
     * Preload the image
     */
    preload() {
        if (true === this.loaded) {
            return;
        }

        Loader
            .load(this.src)
            .then(() => {
                this.loaded = true;
                this.trigger('loaded');
            })
        ;
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
