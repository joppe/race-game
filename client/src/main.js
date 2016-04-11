import {Controls} from './input/Controls.js';
import {State} from './game/model/State.js';
import {Track} from './game/view/Track.js';

let controls = new Controls(),
    state = new State(),
    track = new Track({
        model: state,
        el: document.querySelector('.js-track')
    });

document.body.appendChild(track.render().el);
