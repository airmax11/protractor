"use strict";
exports.__esModule = true;
var classDemo_1 = require("./classDemo");
var airmax = new classDemo_1.classDemo();
airmax.setSSN();
console.log(airmax.getSSN());
function name(params) {
    console.log(params);
}
name(2345);
