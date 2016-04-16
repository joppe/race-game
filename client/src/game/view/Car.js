import {Canvas} from './../../dom/Canvas.js';
import {CanvasView} from './CanvasView.js';

const WIDTH = 800,
    HEIGHT = 397,
    SCALE = 0.04;

/**
 * @class Car
 */
export class Car extends CanvasView {
    /**
     * @param {Object} options
     */
    constructor(options) {
        super(options);

        this.foreground = new Canvas(WIDTH, HEIGHT);

        this.foreground.drawImage('img/car.png', 0, 0, WIDTH, HEIGHT, 0, 0, SCALE * WIDTH, SCALE * HEIGHT)
            .then(() => {
                this.model.set('carReady', true);
            })
            .catch((error) => {
                this.model.set('error', error);
            })
        ;
    }

    /**
     * @param {CanvasRenderingContext2D} context
     */
    draw(context) {
    }
}
