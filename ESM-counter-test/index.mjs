import "./moduleB.mjs"; // immediately executes all the code in the module
import { count, increment, getCount } from "./moduleA.mjs";

// notice how the count is already 3 because the code in moduleB has executed
console.log(getCount());
// this will log the same thing since we imported the value
console.log(count);

// count = 10; throws an error because the value is read-only

// this adds to the same value
increment();
console.log(getCount());
