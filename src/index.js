
import _ from 'lodash';
//import Print from './print.js';

function component() {

    var element = document.createElement("div");
    element.innerHTML = _.join(["Another","module",'lodash!'],' ');
    element.classList.add("hello");
//    element.onclick = Print.bind(null,"Hello webpack");
    return element;
}


document.body.appendChild(component());