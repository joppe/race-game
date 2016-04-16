import {Track} from './view/Track.js';

const WIDTH = 800,
    HEIGHT = 600;

/**
 * @class Game
 */
export class Game {
    /**
     * Constructor
     */
    constructor($container) {
        let track = new Track({
            width: WIDTH,
            height: HEIGHT
        });

        $container.append(track.render().el);
    }

    /**
     * Start the game
     */
    start() {
        this.rafId = window.requestAnimationFrame(this.start.bind(this));
    }

    /**
     * End the game
     */
    stop() {
        window.cancelAnimationFrame(this.rafId);
    }
}
