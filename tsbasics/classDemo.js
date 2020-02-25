"use strict";
exports.__esModule = true;
var classDemo = /** @class */ (function () {
    function classDemo() {
        this.ssn = 123456789;
    }
    classDemo.prototype.setUsername = function (username) {
        this.username = username;
    };
    classDemo.prototype.setSSN = function () {
        this.ssn = 456789852;
    };
    classDemo.prototype.getUsername = function () {
        return this.username;
    };
    classDemo.prototype.getSSN = function () {
        return this.ssn;
    };
    return classDemo;
}());
exports.classDemo = classDemo;
// let airmax = new classDemo();
// airmax.setUsername('Maximus 1');
// console.log(airmax.getUsername());
// console.log(airmax.getSSN());
// airmax.setSSN();
// console.log(airmax.ssn)
