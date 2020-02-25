let a = 5;
a = 6;
a = Number('3');

let b:number;
b = 4;

let c:string = '9';
let d:Array<boolean>;
d = [true, true, false]
let r:Array<string>;
r = ['4', '6'];

let g:any;
g = 5;
g = 'true';
g = true;






for (let i=0;i<5;i++){
    setTimeout(function() {console.log(i), 100 * i})
}