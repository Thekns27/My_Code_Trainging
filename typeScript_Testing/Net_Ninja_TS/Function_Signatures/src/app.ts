// -------------------
// Function signatures
// --------------------

type Calculate = (numOne: number, numTwo: number) => number;

function addTwoNumbers(a: number, b: number) {
  return a + b;
}

function multiplyTwoNumbers(first: number, second: number) {
  return first * second;
}

function squareNumbers(num: number) {
  return num * num;
}

function joinTwoNumbers(numOne: number, numTwo: number) {
  return `${numOne}${numTwo}`;
}

let calcs: Calculate[] = [];

calcs.push(addTwoNumbers);
calcs.push(multiplyTwoNumbers);
calcs.push(squareNumbers);
//calcs.push(joinTwoNumbers)  // string' is not assignable to parameter of type 'Calculate'.

// -------------------
// Function signatures on interfaces
// --------------------

interface HasArea {
  name: string;
  calcArea(a: number): number;
}

const shapeOne: HasArea = {
  name: "square",
  calcArea(l: number) {
    return l * l;
  },
};

const shapeTwo: HasArea = {
  name: "circle",
  calcArea(r: number) {
    console.log(Math.PI);
    console.log(r^2);
    return Math.PI * r^2;
  },
};

// shapeOne.calcArea(5);
// shapeTwo.calcArea(10);

// console.log(shapeOne.calcArea(2));
console.log(shapeTwo.calcArea(5));
