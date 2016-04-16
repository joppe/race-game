import {CanvasView} from './CanvasView.js';
import {CanvasImage} from './../../dom/canvas/CanvasImage.js';

/**
 * @class Track
 */
export class Track extends CanvasView {
    /**
     * @returns {string}
     */
    className() {
        return 'c-track';
    }

    /**
     * @param {Object} options
     */
    constructor(options) {
        super(options);

        /*
        this.foreground = new Canvas(WIDTH, HEIGHT);
        this.background = new Canvas(WIDTH, HEIGHT);

        this.foreground.drawImage('img/track.jpg', 0, 0)
            .then(() => {
                this.background.drawImage('img/resistance.png', 0, 0)
                    .then(() => {
                        this.model.set('trackReady', true);
                    })
                    .catch((error) => {
                        this.model.set('error', error);
                    })
                ;
            })
            .catch((error) => {
                this.model.set('error', error);
            })
        ;
        /**/
    }
}
