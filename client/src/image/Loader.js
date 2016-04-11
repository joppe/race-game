/**
 * @class Loader
 */
export class Loader {
    /**
     * @param {string} src
     * @returns {Promise}
     */
    static load(src) {
        return new Promise((resolve, reject) => {
            let image = new Image();

            image.addEventListener('load', () => {
                resolve.call(this, src, image);
            });
            image.addEventListener('error', () => {
                reject.call(this, `Unable to load "${src}"`);
            });

            image.setAttribute('src', src);
        });
    }
}