import "@babel/polyfill";
import './index.html';
import './index.scss';
import {sum, minus} from './modules/calc.js';

console.log(sum(3,6));
console.log(minus(9,1));