import 'babel-polyfill'; // For less spec compliant browsers
import $ from 'jquery';

import Hello from 'views/hello';

// Test module loading
let hello = new Hello();
hello.greetWorld('Future ES2015 Ninja');

// Test importing jQuery
console.log(`You are running jQuery version: ${$.fn.jquery}`);
