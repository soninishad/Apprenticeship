console.log("In this we learn Let , Const and var ");
var a=45;
// var a = "p" ;              var are re-decleare .
var b="Soni";
var c= null;
var d = undefined


let f = "muskan"   
// let f = "rajnish"             let are not a re-decleare again that is show , error . but that is initialized { ( f=29 ; ) ---> that is posible =>initialization called }


const author ="Soini Nishad";
author =5;   // Throws an error because constant cannot be changed.



// Block scope in Var example  
 {
    var b = "this";
    console.log(b);
 }
 console.log(b);        //   kahi bhi variable decleare karo kahi bhi change karo  
                               //    ---> in this ex v se pata chalta hai var GLOBAL SCOPE Variable hai.  kyuki ye globally chnge hota hai / block ke baher bhi.

 
 // *************************************************************** LET 


//      Block scope in Let Example 

let e="Soumya";
{
    let e="Ritesh";                   // in this ex we understand that let is block scoped ,  ( block me changes vali value block me rahegi or ) block ke bahar - bahar jaise hi.
    console.log(e); 
}
console.log(e);