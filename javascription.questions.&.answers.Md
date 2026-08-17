# Core Language & Execution
### What is Hoist in JavaScript?

- **answer**: JavaScript code execute করার আগে execution context তৈরি করে। এই সময় variable এবং function declaration সম্পর্কে JavaScript তথ্য প্রস্তুত করে রাখে। এই behavior-এর কারণেই hoisting দেখা যায়। var hoist হয়ে undefined দিয়ে initialize হয়, কিন্তু let ও const hoist হলেও initialization-এর আগে TDZ-এর মধ্যে থাকে। আর function declaration পুরোপুরি hoist হওয়ায় declaration-এর আগেও function call করা যায়।

### Explain hoisting for var, let, const, and function declarations.

- **answer**: Hoisting হলো JavaScript-এর এমন একটি আচরণ যেখানে code execute হওয়ার আগে execution context তৈরি করার সময় variable এবং function declaration সম্পর্কে JavaScript প্রয়োজনীয় তথ্য প্রস্তুত করে রাখে। তবে var, let, const এবং function declaration-এর ক্ষেত্রে hoisting-এর আচরণ এক নয়।

### What is the temporal dead zone (TDZ) and why does it exist?

- **answer**: Temporal Dead Zone বা TDZ হলো একটি scope-এর মধ্যে সেই সময়কাল, যখন let অথবা const variable scope-এর মধ্যে আছে কিন্তু এখনও initialize হয়নি। এই সময় variable-টিকে access করার চেষ্টা করলে JavaScript ReferenceError দেয়।

### How does the JavaScript execution context work?

- **answer**: Execution Context হলো JavaScript-এর একটি environment যেখানে code execute হয়। JavaScript শুরু হলে প্রথমে Global Execution Context তৈরি হয়। এরপর কোনো function call হলে সেই function-এর জন্য একটি নতুন Function Execution Context তৈরি হয়। Function-এর কাজ শেষ হলে সেই context execution থেকে চলে যায়।

### Difference between call stack, task queue, and microtask queue.

- **answer**: Call Stack হলো যেখানে JavaScript বর্তমানে যে function বা code execute করছে তার execution track করা হয়। Task Queue বা Macrotask Queue-তে setTimeout, setInterval এবং কিছু browser event-এর callback থাকে। আর Microtask Queue-তে সাধারণত Promise callback এবং queueMicrotask()-এর মতো high-priority asynchronous কাজ থাকে।

### How does the event loop prioritize Promises over setTimeout?

- **answer**: এর কারণ হলো Promise callback এবং setTimeout callback দুটি আলাদা queue-তে যায়। Promise callback Microtask Queue-তে যায়, আর setTimeout callback Task বা Macrotask Queue-তে যায়। বর্তমান synchronous code শেষ হওয়ার পর Call Stack খালি হলে Event Loop আগে Microtask Queue process করে। তাই সাধারণভাবে Promise callback setTimeout callback-এর আগে execute হয়, এমনকি setTimeout-এর delay 0ms হলেও

### Explain lexical scoping with an example.

- **answer**: Lexical Scoping হলো JavaScript-এর এমন একটি scope mechanism যেখানে কোনো function কোন variable access করতে পারবে সেটা নির্ধারিত হয় function-টি code-এর কোথায় define করা হয়েছে তার ওপর, function-টি কোথা থেকে call করা হয়েছে তার ওপর নয়।

### What happens when you access an undeclared variable vs undefined?

- **answer**: Undeclared variable হলো এমন একটি variable যেটি accessible scope-এর মধ্যে কোথাও declare করা হয়নি। এটিকে access করার চেষ্টা করলে JavaScript ReferenceError দেয়। অন্যদিকে undefined হলো JavaScript-এর একটি valid value, যা সাধারণত বোঝায় variable declare করা হয়েছে কিন্তু বর্তমানে তার কোনো assigned value নেই।

### What is a closure, and when does it cause memory leaks?

- **answer**: Memory Leak কখন হতে পারে?

Closure নিজে memory leak নয়। কিন্তু কোনো closure যদি অপ্রয়োজনীয় বড় data বা object-কে ধরে রাখে এবং সেই closure-এর reference দীর্ঘসময় থেকে যায়, তাহলে সেই memory release না হয়ে memory leak হতে পারে।

সহজভাবে:

Closure = function বাইরের variable মনে রাখে।
Memory Leak = প্রয়োজন না থাকলেও সেই data memory-তে আটকে থাকে।

Interview-এ সহজ উত্তর:

“A closure is when a function remembers and can access variables from its outer scope even after the outer function has finished executing. A closure can cause a memory leak when it keeps unnecessary objects or data alive for a long time, preventing JavaScript’s garbage collector from removing them.”

### Difference between function declaration and function expression.

- **answer**: 🧠 সহজভাবে:
Function Declaration	Function Expression
function add(){}	const add = function(){}
Fully hoisted	Declaration-এর আগে ব্যবহার করা যায় না
Function হিসেবে সরাসরি declare করা	Variable-এর মধ্যে রাখা হয়
⭐ Interview Answer

“The main difference is hoisting. Function declarations are fully hoisted, so we can call them before their declaration. Function expressions are assigned to variables, so they cannot be used before the variable is initialized.”

### How does this behave in:
- normal functions
- arrow functions
- event handlers

- **answer**: this কোন object-কে নির্দেশ করবে সেটা function কীভাবে ব্যবহার বা call করা হচ্ছে তার ওপর নির্ভর করে। Normal function-এর ক্ষেত্রে this সাধারণত function কীভাবে call করা হয়েছে তার ওপর নির্ভর করে। Arrow function-এর নিজের কোনো this নেই; এটি বাইরের scope থেকে this নেয়। আর সাধারণ DOM event handler-এ regular function ব্যবহার করলে this সাধারণত যে element-এ event ঘটেছে সেটিকে নির্দেশ করে।

### Explain bind, call, and apply with use cases.

- **answer**: 🧠 সহজে মনে রাখো
Method	কী করে?
call()	এখনই function চালায়
apply()	এখনই function চালায়
bind()	নতুন function তৈরি করে, পরে চালানো যায়

আর:

call → arguments আলাদা
apply → arguments array
bind → নতুন function
⭐ Interview Answer

“Call and apply execute the function immediately, while bind returns a new function that can be executed later. The main difference between call and apply is how they receive arguments.”

### What is currying and why is it useful?

- **answer**: Currying হলো এমন একটি technique যেখানে একাধিক parameter নেওয়া একটি function-কে কয়েকটি ছোট function-এ ভাগ করা হয়, যেখানে প্রতিটি function একবারে একটি করে argument নেয়।

Normal Function:
function add(a, b) {
    return a + b;
}


add(5, 10);

এখানে একসাথে দুইটা value নিচ্ছে।

Curried Function:
function add(a) {
    return function(b) {
        return a + b;
    };
}


console.log(add(5)(10));

### What is function composition? ei questions gular answer o same

- **answer**: Function Composition হলো একাধিক ছোট function-কে একসাথে ব্যবহার করে একটি বড় কাজ সম্পন্ন করা। একটি function-এর output পরবর্তী function-এর input হিসেবে কাজ করে। এতে complex logic ছোট ছোট reusable function-এ ভাগ করা যায়।

Example:
function double(x) {
    return x * 2;
}


function addTen(x) {
    return x + 10;
}


const result = addTen(double(5));


console.log(result);



####  🔥 খুব সহজে ৬টা Concept মনে রাখো
8. Closure

Inner function বাইরের function-এর variable মনে রাখতে পারে।

9. Function Declaration

function add(){} — fully hoisted।

Function Expression

const add = function(){} — variable-এর মধ্যে function রাখা হয়।

10. this

Normal function → কীভাবে call হয়েছে তার ওপর নির্ভর করে।

Arrow function → বাইরের scope-এর this নেয়।

11. call, apply, bind

call → এখনই execute + arguments আলাদা

apply → এখনই execute + arguments array

bind → নতুন function তৈরি + পরে execute

12. Currying

একসাথে অনেক argument না নিয়ে একবারে একটি করে argument নেওয়া।

add(5)(10)
13. Function Composition

এক function-এর output আরেক function-এর input।

A → B → C

Interview-এ এগুলোর উত্তর দেওয়ার সময় প্রথমে ২–৩ লাইনে মূল concept বলবে, তারপর ছোট example দেবে। এতে interviewer বুঝবে তুমি শুধু definition মুখস্থ করোনি, concept-টাও বুঝেছ।