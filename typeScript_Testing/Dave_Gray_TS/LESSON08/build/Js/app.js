const echo = (arg) => arg;
const isObj = (arg) => {
    return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};
console.log(isObj(true));
console.log(isObj("John"));
console.log(isObj([1, 2, 3]));
console.log(isObj({ name: "John" }));
console.log(isObj(null));
const isTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { arg, is: false };
    }
    return { arg, is: !!arg };
};
console.log(isTrue(false));
console.log(isTrue(0));
console.log(isTrue(true));
console.log(isTrue(1));
console.log(isTrue("Dave"));
console.log(isTrue(""));
console.log(isTrue(null));
console.log(isTrue(undefined));
console.log(isTrue({})); // modified
console.log(isTrue({ name: "Dave" }));
console.log(isTrue([])); //modified
console.log(isTrue([1, 2, 3]));
console.log(isTrue(NaN));
console.log(isTrue(-0));
const checkBoolValue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { value: arg, is: false };
    }
    return { value: arg, is: !!arg };
};
const processUser = (user) => {
    // process the user with logic here
    return user;
};
console.log(processUser({ id: 1, name: "Dave" }));
//console.log(processUser({name:'Dave'}))
const getUserProperty = (users, key) => {
    return users.map((user) => user[key]);
};
const usersArray = [
    {
        id: 1,
        name: "John",
        username: "johndoe",
        email: "john@outlook.com",
        address: {
            street: "Pyi Thar Yar",
            city: "Yangon",
            geo: {
                lat: "-37.3159",
                lng: "81.1496",
            },
        },
        phone: "09-234105289",
        website: "hildegard.org",
        company: {
            name: "Xsphere",
            bs: "harness real-time e-markets",
        },
    },
    {
        id: 2,
        name: "Doe",
        username: "johndoe",
        email: "Doe@outlook.com",
        address: {
            street: "Pyae  Yar",
            city: "Yangon",
            geo: {
                lat: "-37.3156",
                lng: "81.1499",
            },
        },
        phone: "09-234105589",
        website: "hildegard.org",
        company: {
            name: "Xsphere",
            bs: "harness real-time e-markets",
        },
    },
];
console.log(getUserProperty(usersArray, "email"));
console.log(getUserProperty(usersArray, "username"));
class StateObject {
    data;
    constructor(value) {
        this.data = value;
    }
    get state() {
        return this.data;
    }
    set state(value) {
        this.data = value;
    }
}
const store = new StateObject("John");
console.log(store.state);
store.state = "Dave";
//store.state = 12
const myState = new StateObject([15]);
myState.state = ["Dave", 42, true];
console.log(myState.state);
export {};
//# sourceMappingURL=app.js.map