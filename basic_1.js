let a = 3;
let b = "Hello"
console.log(typeof(a));
console.log(typeof(b));

console.log("For started");
for (let i = 0; i < 6; i++) {
    console.log(i);
};

console.log("While started");
while (a < 5) {
    console.log(a);
    a++;
};

console.log("Do while started");
do {
    console.log(a);
    a++
} while (a >= 8);

function adding(a, b) {
    return a + b;
}
console.log(adding(4,10));

