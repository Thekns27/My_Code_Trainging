// Union type

let someId: number | string;

someId = 1;
someId = "2";

let email: string | null = null;
email = "kyaw@gmail.com";
email = null;

type Id = number | string;
let anotherId: Id;

anotherId = "kayeh dkfhi";
anotherId = 45;

// Union type pitfall
function swapIdType(id: Id): Id {
  // can only use props and methods common to
  // both number and string type
  // parseInt(id) not allowed
  return id;
}
swapIdType(5);
