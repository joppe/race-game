import Backbone from 'backbone';
import {Cars} from './../collection/Cars.js';

/**
 * @class State
 */
export class State extends Backbone.Model {
    /**
     * @returns {Object}
     */
    defaults() {
        return {
            error: null,
            trackReady: false,
            carReady: false,
            cars: new Cars()
        };
    }
}
