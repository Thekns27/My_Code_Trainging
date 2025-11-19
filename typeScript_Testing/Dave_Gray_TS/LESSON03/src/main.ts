let stringArr = ["one", "hey", "Dave"];

let guitars = ["strat", "les paul", 5150];

let mixedData = ["EVH", 1984, true];

stringArr[0] = "john";
stringArr.push("hey");

guitars[0] = 1984;
guitars.unshift("Jim");
// guitars = stringArr
// mixedData = stringArr
let test = [];
let bands: string[] = [];
bands.push("Van Halen");

// Tuple
let myTuple: [string, number, boolean] = ["Dave", 42, true];

let mixed = ["john", 2, false];

//mixed = myTuple
//myTuple = mixed
myTuple[1] = 42;
// objects
let myObj: object;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};

const exampleObj = {
  prop1: "Dave",
  prop2: "true",
};
exampleObj.prop1 = "johm";

interface Guitarist {
  name?: string;
  active: boolean;
  albums: (string | number)[];
}

let evh: Guitarist = {
  name: "Eddie",
  active: false,
  albums: [1984, 5150, "OU812"],
};
let Jp: Guitarist = {
  name: "Jimmy",
  active: true,
  albums: ["I", "II", "IV"],
};
evh = Jp;

const greetGuitarist = (guitarist: Guitarist) => {
  if (guitarist.name) {
    return `Hello ${guitarist.name?.toUpperCase()}!`;
  }
  return "hello!";
};
console.log(greetGuitarist(Jp));

// Enums

// "Unlike most TypeScript features , Enums are not a
// type-level addtion to JavaScript but someting
// added to the language and runtime."

enum Gread {
  U = 1,
  D,
  C,
  B,
  A,
}
console.log(Gread.U);
