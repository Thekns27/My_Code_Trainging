// -------------------
// Function signatures
// --------------------
function addTwoNumbers(a, b) {
    return a + b;
}
function multiplyTwoNumbers(first, second) {
    return first * second;
}
function squareNumbers(num) {
    return num * num;
}
function joinTwoNumbers(numOne, numTwo) {
    return `${numOne}${numTwo}`;
}
let calcs = [];
calcs.push(addTwoNumbers);
calcs.push(multiplyTwoNumbers);
calcs.push(squareNumbers);
const shapeOne = {
    name: "square",
    calcArea(l) {
        return l * l;
    },
};
const shapeTwo = {
    name: "circle",
    calcArea(r) {
        console.log(Math.PI);
        console.log(r ^ 2);
        return Math.PI * r ^ 2;
    },
};
// shapeOne.calcArea(5);
// shapeTwo.calcArea(10);
// console.log(shapeOne.calcArea(2));
console.log(shapeTwo.calcArea(5));
export {};
//# sourceMappingURL=app.js.map