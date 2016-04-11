/* eslint-disable no-var, prefer-arrow-callback, prefer-template*/
var systemLocate = System.locate;

System.locate = function (load) {
    var System = this;

    return Promise.resolve(systemLocate.call(this, load)).then(function (address) {
        return address + System.cacheBust;
    });
};

System.cacheBust = '?bust=' + Date.now();

System.config({
    baseURL: './',

    transpiler: 'babel',

    map: {
        underscore: 'vendor/underscore/underscore.js',
        backbone: 'vendor/backbone/backbone.js',
        jquery: 'vendor/jquery/dist/jquery.js'
    },

    meta: {
        backbone: {
            deps: ['jquery', 'underscore']
        }
    }
});
