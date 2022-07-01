//CommonJS, every file is module (by default)
//Modules - Encapsulated Code (only share minimum)

// console.log(module);

const names=require("./names")
const myFunc=require("./func")
const myData=require("./alternative");
require("./mindGenerade");
// console.log(myData);
// console.log(names);

// myFunc(names.empire)
// myFunc(names.sheikh)