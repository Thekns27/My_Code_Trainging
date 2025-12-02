//------------- Type Guard--------------
type Id = number | string;

function swapIdType(id: Id) {
  if (typeof id === "string") {
    // can use string methods
    return parseInt(id);
  } else {
    // can use number methods and properties\
    return id.toString();
  }
}
const idOne = swapIdType(1);
const idTwo = swapIdType("2");

console.log(idOne, idTwo);

// --------------tagged interface --------------

interface User {
  type: "user";
  userName: string;
  email: string;
  id: Id;
}

interface Person {
  type: "person";
  firstName: string;
  age: number;
  id: Id;
}
function logDetail(value: User | Person): void {
  if (value.type === "user") {
    console.log(value.userName, value.email);
  }
  if (value.type === "person") {
    console.log(value.firstName, value.age);
  }
}
