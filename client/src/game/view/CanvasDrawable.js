import Backbone from 'backbone';

/**
 * @class CanvasDrawable
 */
export class CanvasDrawable extends Backbone.View {
    /**
     * @returns {boolean}
     */
    redraw() {
        return true;
    }

    /**
     * This is an abstract method that must be implemented by all child classes
     *
     * @param {CanvasRenderingContext2D} context
     */
    draw(context) {
        throw new Error(`Class ${this.constructor.name} must implement draw method`);
    }
}
