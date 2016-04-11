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
            cars: new Cars(),
            state: null
        };
    }
}
