"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function swapIdType(id) {
    if (typeof id === "string") {
        // can use string methods
        return parseInt(id);
    }
    else {
        // can use number methods and properties\
        return id.toString();
    }
}
const idOne = swapIdType(1);
const idTwo = swapIdType("2");
console.log(idOne, idTwo);
// --------------tagged interface --------------
//# sourceMappingURL=app.js.map