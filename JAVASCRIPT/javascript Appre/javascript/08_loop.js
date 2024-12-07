// loops

// For Loop   --- Me ( n-1 ) baar chalta hai , ek kam tak chalta hai .


// program to add first n natural numbers.
let sum = 0;
let n = prompt ("Enter the value of number ")
n = Number.parseInt(n)
for ( let i=0; i<n; i++){
    sum += (i+1);
} 
console.log( "sum of first  " + n + " natural numbers is " +sum ) ;
// console.log(i)  ---- let block scope h so does not print showing error , but we change let/ var then print the value globally.




// FOR IN LOOP  (modern loop )


let obj = {
    soni :90 ,
    shubh : 45 ,
    abhishek : 56 ,
    mahek : 57 ,
    sandhya : 23 
}
for ( a in obj ){
    console.log(a);
    console.log( "Marks of "  + a + " are " +obj [a] )
}



// FOR OF LOOP

for ( b of "soni"){
    console.log(b);
}

















