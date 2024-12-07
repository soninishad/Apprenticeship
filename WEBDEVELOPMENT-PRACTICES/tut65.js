//    Synchronous or blocking
//   -line by line excution

//   Asynchronous or nor-blocking
//  -line by line execution not guaranteed
//   -callbacks will fire



//         Asynchronous mode use
const fs = require("fs");
fs.readFile("index.txt" , "utf-8" , (err, data)=>{
    console.log(data);
});
console.log("This is a message");
