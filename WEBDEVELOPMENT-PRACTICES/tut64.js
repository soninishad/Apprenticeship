const fs = require("fs");
let text = fs.readFileSync( "index.txt" , "utf-8"
);
text = text.replace("content","Soni");

console.log("The content of the file is")
console.log(text);

console.log("Creating a new file");
fs.writeFileSync("index.txt" , text);