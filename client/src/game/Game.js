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
    constructor() {
        this.canvases = {
            track: new Track(WIDTH, HEIGHT)
        };
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
