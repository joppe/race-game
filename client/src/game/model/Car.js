import {Point} from './../../geometry/Point.js';
import {Vector} from './../../geometry/Vector.js';
import Backbone from 'backbone';

const MAX_SPEED = 30;

/**
 * @class Car
 */
export class Car extends Backbone.Model {
    /**
     * @returns {Object}
     */
    defaults() {
        return {
            position: new Point(0, 0),
            direction: new Vector(0, 0),
            speed: 0,
            friction: 0
        };
    }

    /**
     * @param {number} amount
     * @returns {Car}
     */
    accelerate(amount) {
        let speed = this.get('speed');

        speed = Math.min(speed + amount, MAX_SPEED);

        this.set('speed', speed);

        return this;
    }

    /**
     * This method calculates the new speed/position of the car
     */
    tick() {
        let speed = this.get('speed'),
            friction = this.get('friction'),
            position = this.get('position');

        if (0 < speed) {
            speed = Math.max(speed - friction, 0);
        } else if (0 > speed) {
            speed = Math.min(speed + friction, 0);
        }

        this.set({
            speed,
            position: position.add(new Point(speed, 0))
        });
    }
}
