import Backbone from 'backbone';
import {Car} from './../model/Car.js';

/**
 * @class Cars
 */
export class Cars extends Backbone.Collection {
    /**
     * @returns {Car}
     */
    get model() {
        return Car;
    }
}
