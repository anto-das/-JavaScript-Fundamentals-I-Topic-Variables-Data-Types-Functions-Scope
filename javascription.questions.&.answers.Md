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
