import {Point} from './../../geometry/Point.js';
import {Vector} from './../../geometry/Vector.js';
import Backbone from 'backbone';

// const MAX_SPEED = 30;

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
            speed: new Vector(0, 0)
        };
    }
}
