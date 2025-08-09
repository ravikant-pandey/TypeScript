"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greeting = "Hello World";
console.log(greeting.toLowerCase());
// number
var userId = 23344; // 233.34 also a number
// boolean
var isUserLoggedIn = false;
var arr = [1, 2, 3, "hello"];
// tuple
var arr1 = [2, "raj"]; // this is promiss i give u only
var arr2 = ["raj", 1]; // but i give so it is error like
// enum
// an enum in TypeScript is a special type that defines a set of named constants to make code more readable, type-safe, and self-documenting.
var Status;
(function (Status) {
    Status["Pending"] = "PENDING";
    Status["InProgress"] = "IN_PROGRESS";
    Status["Completed"] = "COMPLETED";
    Status["Failed"] = "FAILED";
})(Status || (Status = {}));
