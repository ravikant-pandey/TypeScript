// 1. any – No type checking at all

let abc: any = "Hello";
abc = 42; // OK
abc = true; // OK
console.log(abc); // can be anything

// 2. unknown – Similar to any, but safer (must check type before use)

let value: unknown;
value = "Hello";
value = 13;

// value.toUpperCase(); // ❌ Error: Object is of type 'unknown'
if (typeof value === "string") {
  console.log(value.toUpperCase()); // ✅ Safe after type check
}

// 3. void – No value (often return type of functions)

function logMessage(message: string): void {
  console.log(message);
}

// 4. null – Explicitly no value
let emptyValue: null = null;

// 5. undefined – Variable declared but not assigned a value

let notAssigned: undefined = undefined;

// 6. never – Value that never occurs (used for functions that never return)

function throwError(message: string): never {
  throw new Error(message);
}
