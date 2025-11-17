// extend / optional propert
// Interface
// obj ထက်ကောင်းတဲ့ obj လို့ ပြောလို့ရ  1 => extend လုပ်လို့ရ
//                                 2 => optional properties
// interface တစ်ခု တည်ဆောက်မယ်ဆို အရင်ဆုံး interface keywork လေး လိုအပ်ပါမယ်။


/**
 * လက်ရှိ ရှိနေပြီးသား interface ကို  feature ထပ်ထည့်မယ် ပြီးတော့
    ရှိနေပြီးသားထဲ လဲ ထပ်မထည့် ချင်ရင် interface တစ်ခု ထပ်ခွဲပြီး ရေး
 * ဒီလိုရေးတာ ကို reopen လုပ်တာ လို့လည်းခေါ်
 * သူ့ကို ခေါ်သုံးထားတဲ့နေရာတွေမှာတော့ error တတ်နိုင်။
 * obj ထဲက properties တွေကို override လုပ်နိုင်။
 * override လုပ်မရအောင် class မှာရော  type မှာရော ကာကွယ်လို့ရတယ်။
 * type မှာဆို readonly ဆိုတဲ့ keyword နဲ့ ကာကွယ်လို့ရ။

 */


interface Admin extends User, Editor {
  addUser(): string;
}

let userOne: User = {
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

let userTwo: User = {
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
// let adminOne : Admin = {

// };
