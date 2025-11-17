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

reopen => တူညီတဲ့ interface name ထဲ မှာ ဘဲ Methods အသစ်တွေ properties အသစ်တွေထပ်တိုးချင်
          သုံးတယ်။

Extends => မတူညီတဲ့ interface အသစ်တွေမှာ ရှိပြီသား interface ရဲ့ methods တွေ properties တွေ ကို
ကူးယူပြီး သုံးတဲ့အခါ သုံးတယ်။

class တွေ လိုဘဲ interface   တွေမှာ လည်း  readonly  keywork ရှိမယ်။
readonly က ဘာလည်း‌ေ။

* override လုပ်မရအောင် class မှာရော  type မှာရော ကာကွယ်လို့ရတယ်။
 * type မှာဆို readonly ဆိုတဲ့ keyword နဲ့ ကာကွယ်လို့ရ။
 *
 * ENUM
 *ဆိုတာ ဖက်တဲ့အခါ လွယ်ကူအောင် ကူညီပေးတာလို့ အလွယ်မှတ်
 *
 *
  * type Alias
 *
 * တူညီတဲ့ structure ရှိတဲ့ object တွေကို type alias နဲ့ သတ်မှတ်ပေးနိုင်တယ်။
 * type alias ကို interface နဲ့ class တို့လိုပဲ အသုံးပြုနိုင်တယ်။
 * type alias ကို union type တွေနဲ့လည်း သုံးနိုင်တယ်။
 * type alias ကို intersection type တွေနဲ့လည်း သုံးနိုင်တယ်။
 * type alias ကို primitive types တွေနဲ့လည်း သုံးနိုင်တယ်။
 * type alias ကို tuple types တွေနဲ့လည်း သုံးနိုင်တယ်။
 * type alias ကို function types တွေနဲ့လည်း သုံးနိုင်တယ်။
 * type alias ကို generic types တွေနဲ့လည်း သုံးနိုင်တယ်။
 * type alias ကို mapped types တွေနဲ့လည်း သုံးနိုင်တယ်။
 * type alias ကို conditional types တွေနဲ့လည်း သုံးနိုင်တယ်။
 * type alias ကို utility types တွေနဲ့လည်း သုံးနိုင်တယ်။
 * type alias ကို keyof types တွေနဲ့လည်း သုံးနိုင်တယ်။
 * type alias ကို typeof types တွေနဲ့လည်း သုံးနိုင်တယ်။
 * type alias ကို infer types တွေနဲ့လည်း သုံးနိုင်တယ်။
 * type alias ကို template literal types တွေနဲ့လည်း သုံးနိုင်တယ်။
 * type alias ကို recursive types တွေနဲ့လည်း သုံးနိုင်တယ်။
 * type alias ကို branded types တွေနဲ့လည်း သုံးနိုင်တယ်။
 * type alias ကို opaque types တွေနဲ့လည်း သုံးနိုင်တယ်။
 * type alias ကို nominal types တွေနဲ့လည်း သုံးနိုင်တယ်။
 * type alias ကို structural types တွေနဲ့လည်း သုံးနိုင်တယ်။
 * type alias ကို declaration merging တွေနဲ့လည်း သုံးနိုင်တယ်။
 * type alias ကို ambient declarations တွေနဲ့လည်း သုံးနိုင်တယ်။
 * type alias ကို module augmentation တွေနဲ့လည်း သုံးနိုင်တယ်။
 * type alias ကို declaration files တွေနဲ့လည်း သုံးနိုင်တယ်။
 * type alias ကို JSDoc comments တွေနဲ့လည်း သုံးနိုင်တယ်။
 * type alias ကို triple-slash directives တွေနဲ့လည်း သုံးနိုင်တယ်။
 *  type alias ကို JSX types တွေနဲ့လည်း သုံးနိုင်တယ်။
 * type alias ကို declaration merging တွေနဲ့လည်း သုံးနိုင်တယ်။
 * type alias ကို ambient declarations တွေနဲ့လည်း သုံးနိုင်တယ်။
 * type alias ကို module augmentation တွေနဲ့လည်း သုံးနိုင်တယ်။
 * type alias ကို declaration files တွေနဲ့လည်း သုံးနိုင်တယ်။
 * type alias ကို JSDoc comments တွေနဲ့လည်း သုံးနိုင်တယ်။
 */

import type { User } from "./interfaces/user";


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
