import {classDemo} from './classDemo';

let airmax = new classDemo();
airmax.setSSN();
console.log(airmax.getSSN());


function name(params:number) {
    console.log(params);
}

name(2345);