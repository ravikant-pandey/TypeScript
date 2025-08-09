// 1. any – No type checking at all
var abc = "Hello";
abc = 42; // OK
abc = true; // OK
console.log(abc); // can be anything
// 2. unknown – Similar to any, but safer (must check type before use)
var value;
value = "Hello";
value = 13;
// value.toUpperCase(); // ❌ Error: Object is of type 'unknown'
if (typeof value === "string") {
    console.log(value.toUpperCase()); // ✅ Safe after type check
}
// 3. void – No value (often return type of functions)
function logMessage(message) {
    console.log(message);
}
// 4. null – Explicitly no value
var emptyValue = null;
// 5. undefined – Variable declared but not assigned a value
var notAssigned = undefined;
// 6. never – Value that never occurs (used for functions that never return)
function throwError(message) {
    throw new Error(message);
}
