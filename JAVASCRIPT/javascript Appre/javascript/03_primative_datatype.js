
//   Primitive in js

//  nn bb ss u  ---> null , number , boolean , byte , string , symbol , undefined.


let a =null;
let b = 45;
let c = true  // can also be false
let d = BigInt("5678");            // byte
let e = BigInt("856")+ BigInt("4");

let f = "Soni" ;
let g = Symbol( " I am a nice symbol");
let h = undefined;    
let i ;  // also a undefined

console.log( a ,b , c, d, e, f, g, h);

console.log(typeof d);
console.log(typeof i);




//  Non Primitive datatype - Object in Js

const items = {
                        "Soni"  : true ,
                        "Shubh"  : false ,
                        "shakil"  : 70 ,
                        "Anchal" : undefined 
                      }

 console.log( items["shakil"]);

 console.log(typeof items);

 console.log( items["shjgkjk"]);










