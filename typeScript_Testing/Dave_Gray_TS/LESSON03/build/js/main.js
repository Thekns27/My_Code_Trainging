"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
let bands = [];
bands.push("Van Halen");
// Tuple
let myTuple = ["Dave", 42, true];
let mixed = ["john", 2, false];
//mixed = myTuple
//myTuple = mixed
myTuple[1] = 42;
// objects
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};
const exampleObj = {
    prop1: "Dave",
    prop2: "true",
};
exampleObj.prop1 = "johm";
let evh = {
    name: "Eddie",
    active: false,
    albums: [1984, 5150, "OU812"],
};
let Jp = {
    name: "Jimmy",
    active: true,
    albums: ["I", "II", "IV"],
};
evh = Jp;
const greetGuitarist = (guitarist) => {
    var _a;
    if (guitarist.name) {
        return `Hello ${(_a = guitarist.name) === null || _a === void 0 ? void 0 : _a.toUpperCase()}!`;
    }
    return "hello!";
};
console.log(greetGuitarist(Jp));
// Enums
// "Unlike most TypeScript features , Enums are not a
// type-level addtion to JavaScript but someting
// added to the language and runtime."
var Gread;
(function (Gread) {
    Gread[Gread["U"] = 1] = "U";
    Gread[Gread["D"] = 2] = "D";
    Gread[Gread["C"] = 3] = "C";
    Gread[Gread["B"] = 4] = "B";
    Gread[Gread["A"] = 5] = "A";
})(Gread || (Gread = {}));
console.log(Gread.U);
//# sourceMappingURL=main.js.map