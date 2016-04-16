import $ from 'jquery';
import {Game} from './game/Game.js';

let game = new Game($('.js-game'));

game.start();
