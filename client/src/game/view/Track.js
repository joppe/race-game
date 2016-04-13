import {Canvas} from './../../dom/Canvas.js';
import Backbone from 'backbone';


/**
 * @class Track
 */
export class Track extends Backbone.View {
    /**
     * @returns {string}
     */
    className() {
        return 'c-track';
    }

    /**
     * @returns {string}
     */
    tagName() {
        return 'canvas';
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

    /**
     * @returns {Track}
     */
    render() {
        // this.foreground.appendTo(this.el);
        this.$el.attr('width', WIDTH);
        this.$el.attr('height', HEIGHT);

        return this;
    }
}
