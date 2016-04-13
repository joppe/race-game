import Backbone from 'backbone';

/**
 * @class CanvasView
 */
export class CanvasView extends Backbone.View {
    /**
     * This is an abstract method that must be implemented by all child classes
     */
    draw() {
        throw new Error(`Class ${this.constructor.name} must implement draw method`);
    }
}
