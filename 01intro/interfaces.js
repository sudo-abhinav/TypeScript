"use strict";
// TODO Interfaces;
Object.defineProperty(exports, "__esModule", { value: true });
var transcation1 = {
    payeeAccountNumber: 765,
    payerAccountNumber: 123,
};
var transcation2 = {
    payeeAccountNumber: 723,
    payerAccountNumber: 345,
};
var bankaccount = {
    accountNumber: 98766,
    accountHolder: "abhinav kumar",
    balance: 7800,
    isActive: true,
    transcation: [transcation1, transcation2],
};
var userbook = {
    name: "humpty dumpty",
    price: 234,
    FileSize: 300,
    format: "epub",
    duration: 5,
};
var flyingObject = {
    name: "Airbus A380",
    FuelCapacity: 1000,
    Weight: 3500,
    isActive: true,
    pasangerCapacity: 90,
};
var buggydata = {
    id: 22,
    name: "abhi",
    email: "name#b.com",
    startTrail: function () {
        return "sguu";
    },
    getCoupon: function (coupon) {
        return 10;
    }
};
console.log(buggydata.getCoupon);
// TODO this is called unions we are making using PIPE "|"
function printID(id) {
    // console.log(id);
    // console.log(id.toUpperCase());
    // TODO if we are converting id to uppercase and this is a big issue
    // for preventing these thing we can use narrowing
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id);
    }
}
// printID('abh')
// printID(22)
// TODO :-  if  type is decide by compiler that is called infer
// TODO = slice works on string and array both so we want print only 3 char from first
// TODO = how we can accept array also , we can achieve that using UNION
function getFirstThree(x) {
    return x.slice(0, 3);
}
// console.log(getFirstThree('sbhuyg'));
console.log(getFirstThree(["abhinav", "alok", "tausif", "ankt", "uppen", "yogi"]));
var abhinav = {
    name: "abhi ",
    id: 98,
};
// am re-assinging the abhinav with adminuser value
abhinav = { username: "superuser", id: 98 };
