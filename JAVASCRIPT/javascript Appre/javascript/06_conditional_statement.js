let a=prompt("Hey what is your age ?");              // prompt jo bhi leta hai usko String me Bna deta hai.
console.log(typeof a);

a= Number.parseInt(a);                // Converting the string to a number

// If statement
if(a>0){
    alert("This is a valid age");
}


// IF - else  statement

if(a>0){
    alert( "This is valid age");
}
else {
    alert ( " This is Invalid age ");
}



// IF-else-else statement

if(a<0){
    alert ( " This is Invalid age ");
}
else if(a<9) {
    alert ( " You are a kid and you cannot even think of driving");
}
else if(a<18 && a>9 ) {
    alert ( " You are a kid and you can think of   driving after 18 ");
}

else  {
    alert ( " You can now drive as you are above 18 ");
}
console.log("Done");



// TERnary
console.log("you can" , a<18 ? "not drive" :  "drive")




// Switch Case statement 
















 