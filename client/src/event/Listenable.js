import _ from 'underscore';
import Backbone from 'backbone';

/**
 * @class Listenable
 */
class Listenable {}

_.extend(Listenable.prototype, Backbone.Events);

export {Listenable};
