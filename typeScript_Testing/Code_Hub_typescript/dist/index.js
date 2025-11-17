// extend / optional propert
// Interface
// obj ထက်ကောင်းတဲ့ obj လို့ ပြောလို့ရ  1 => extend လုပ်လို့ရ
//                                 2 => optional properties
// interface တစ်ခု တည်ဆောက်မယ်ဆို အရင်ဆုံး interface keywork လေး လိုအပ်ပါမယ်။
let userOne = {
    name: "userOne",
    email: "userOne.com",
    islogin: () => {
        return true;
    },
    getAge() {
        return 20;
    },
    isDriving() {
        return "userOne is Driving Now";
    },
};
//userOne.email = "userOneHacked.com";
//console.log(userOne.isDriving(true));
console.log(userOne.email);
let userTwo = {
    name: "userTwo",
    email: "userTwo.com",
    islogin: () => {
        return false;
    },
    getAge: () => {
        return 22;
    },
    isDriving() {
        return "userTwo is Driving 2min ago";
    },
};
console.log(userTwo);
export {};
// let adminOne : Admin = {
// };
//# sourceMappingURL=index.js.map