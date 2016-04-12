import {Controls} from './input/Controls.js';
import {State} from './game/model/State.js';
import {Track} from './game/view/Track.js';
import {Car as CarModel} from './game/model/Car.js';
import {Car as CarView} from './game/view/Car.js';

let controls = new Controls(),
    state = new State(),
    track = new Track({
        model: state
    }),
    car = new CarView({
        model: new CarModel()
    });

document.body.appendChild(track.render().el);
document.body.appendChild(car.render().el);
