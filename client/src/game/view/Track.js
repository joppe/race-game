import {Canvas} from './../../dom/Canvas.js';
import Backbone from 'backbone';

const WIDTH = 670,
    HEIGHT = 503;

/**
 * @class Track
 */
export class Track extends Backbone.View {
    /**
     * @param {Object} options
     */
    constructor(options) {
        super(options);

        this.foreground = new Canvas(WIDTH, HEIGHT);
        this.background = new Canvas(WIDTH, HEIGHT);

        this.foreground.drawImage('img/track.jpg', 0, 0)
            .then(() => {
                this.background.drawImage('img/resistance.png', 0, 0)
                    .then(() => {
                        this.model.set('state', 'track ready');
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
    }

    /**
     * @returns {Track}
     */
    render() {
        this.foreground.appendTo(this.el);

        return this;
    }
}
