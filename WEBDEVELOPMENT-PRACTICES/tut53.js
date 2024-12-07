console.log(" This is tutorial53 ");

// function greet(name){
//     console.log(name + " is a good girl");
// }
function greet(name , greettext = " GreetText from Javascript"){
    // let name1="Name";         ( local var )
    console.log( greettext + " " + name);
    console.log(name + "  is a good girl");
}

function sum( a,b,c ){
    let d= a+b + c;
    return d;
    // This line will never execute ( Unreachable code )
    // console.log( "Function is returned" );
}

let name = "Soni";
let name1 = "urvashi";  //global 
let name2 = "janvi";
let name3 = "Soumya";
// greet(name);
// greet(name2);
// greet(name3);
let greettext = "good morning";           //greettext & greettext1 also written,
greet(name, greettext);     //calling
greet(name1, greettext);
greet(name2, greettext);
// let returnVal = greet(name3,);
// console.log(returnVal);

let returnVal = sum( 1, 2,3);
console.log(returnVal);
// console.log(name + " is  a good girl");
// console.log(name1+ " is a good girl");
// console.log(name2 + " is a good girl");
// console.log(name3 + " is a good girl");