"use strict";
exports.__esModule = true;
// Q1
var readline_sync_1 = require("readline-sync");
function main() {
    var friststr = (0, readline_sync_1.question)("please enter your first number /n");
    var opration = (0, readline_sync_1.question)("please enter your opration /n");
    var secondStr = (0, readline_sync_1.question)("please enter your secend number /n");
    var validinput = isitnumber(friststr) && isopration(opration) && isitnumber(secondStr);
    if (validinput) {
        var fistnum = parseInt(friststr);
        var secendnum = parseInt(secondStr);
        var result = calulater(fistnum, opration, secendnum);
        console.log("the result" + result);
    }
    else {
        console.log("/n invalid number ");
        main();
    }
}
function calulater(fistnum, opration, secendnum) {
    switch (opration) {
        case "+":
            return fistnum + secendnum;
        case "-":
            return fistnum - secendnum;
        case "*":
            return fistnum * secendnum;
        case "/":
            return fistnum / secendnum;
    }
}
function isopration(opration) {
    switch (opration) {
        case "+":
        case "-":
        case "*":
        case "/":
            return true;
    }
}
//Q2
function isitnumber(str) {
    var mabynum = parseInt(str);
    var isnum = !isNaN(mabynum);
    return isnum;
}

var Frind1 = {
    name: "Areej",
    age: 29,
    Specialization: "information system"
};
var Frind2 = {
    name: "Amal",
    age: 29,
    Specialization: "IT"
};
var Frind3 = {
    name: "maha",
    age: 29,
    Specialization: "information system"
};
console.log(Frind1.name);
console.log(Frind2.age);
console.log(Frind3.Specialization);
