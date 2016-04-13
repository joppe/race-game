import {Controls} from './../input/Controls.js';
import {Car} from './model/Car.js';

/**
 * @class Game
 */
export class Game {
    /**
     * Constructor
     */
    constructor() {
        this.car = new Car();

        this.car.on('change:speed', () => {
            window.console.log(this.car.get('speed'), this.car.get('position').toString());
        });

        this.car.set('friction', 1);

        this.controls = new Controls();
        this.controls
            .addListener(
                this.controls.findCode('up'),
                'keydown',
                () => {
                    window.console.log('start accelerating');
                    this.car.accelerate(5);
                }
            )
            .addListener(
                this.controls.findCode('up'),
                'keyup',
                () => {
                    window.console.log('stop accelerating');
                }
            )
        ;
    }

    /**
     * Start the game
     */
    start() {
        this.car.tick();
        this.rafId = window.requestAnimationFrame(this.start.bind(this));
    }

    /**
     * End the game
     */
    stop() {
        window.cancelAnimationFrame(this.rafId);
    }
}
