var a = 5;
a = 6;
a = Number('3');
var b;
b = 4;
var c = '9';
var d;
d = [true, true, false];
var r;
r = ['4', '6'];
var g;
g = 5;
g = 'true';
g = true;
var _loop_1 = function (i) {
    setTimeout(function () { console.log(i), 100 * i; });
};
for (var i = 0; i < 5; i++) {
    _loop_1(i);
}
