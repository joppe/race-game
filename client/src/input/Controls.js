/**
 * @class Controls
 */
export class Controls {
    /**
     * @returns {{up: number, left: number, right: number, down: number}}
     */
    get map() {
        return {
            up: 38,
            left: 37,
            right: 39,
            down: 40
        };
    }

    /**
     * Constructor
     *
     * @param {HTMLElement} [element]
     */
    constructor(element = null) {
        let root = element;

        this.listeners = {};

        if (null === element) {
            root = document.body;
        }

        root.addEventListener('keydown', (event) => {
            this.handleKey(event, 'keydown');
        });
        root.addEventListener('keyup', (event) => {
            this.handleKey(event, 'keyup');
        });
    }

    /**
     * @param {string} key
     * @returns {number}
     */
    findCode(key) {
        return this.map[key];
    }

    /**
     * @param {number} keycode
     * @param {string} type
     * @param {Function} callback
     */
    addListener(keycode, type, callback) {
        if (undefined === this.listeners[keycode]) {
            this.listeners[keycode] = {};
        }

        if (undefined === this.listeners[keycode][type]) {
            this.listeners[keycode][type] = [];
        }

        this.listeners[keycode][type].push(callback);
    }

    /**
     * @param {Event} event
     * @param {string} type
     */
    handleKey(event, type) {
        if (undefined !== this.listeners[event.keyCode] && undefined !== this.listeners[event.keyCode][type]) {
            this.listeners[event.keyCode][type].forEach((callback) => {
                callback.call(this, event);
            });
        }
    }

    /**
     * Remove all listeners
     */
    reset() {
        this.listeners = {};
    }
}
