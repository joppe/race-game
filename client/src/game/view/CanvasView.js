import Backbone from 'backbone';

/**
 * @class CanvasView
 */
export class CanvasView extends Backbone.View {
    /**
     * @returns {string}
     */
    tagName() {
        return 'canvas';
    }

    /**
     * @param {Object} options
     */
    constructor(options) {
        super(options);

        this.width = options.width;
        this.height = options.height;

        this.drawables = [];
    }

    /**
     * @param {CanvasDrawable} drawable
     */
    addDrawable(drawable) {
        this.drawables.push(drawable);
    }

    /**
     * @returns {CanvasView}
     */
    render() {
        this.$el.attr('width', this.width);
        this.$el.attr('height', this.height);

        return this;
    }

    /**
     * @returns {CanvasRenderingContext2D}
     */
    getContext() {
        return this.el.getContext('2d');
    }

    /**
     * @returns {Canvas}
     */
    clear() {
        this.getContext().clearRect(0, 0, this.width, this.height);

        return this;
    }

    /**
     * @param {Point} position
     * @param {number} width
     * @param {number} height
     * @returns {CanvasPixelArray}
     */
    getImageData(position, width, height) {
        let imageData = this.getContext().getImageData(position.x, position.y, width, height);

        return imageData.data;
    }

    /**
     * Update the view
     */
    update() {
        this.drawables.forEach((drawable) => {
            if (drawable.redraw()) {
                drawable.draw(this.canvas.getContext());
            }
        });
    }
}
