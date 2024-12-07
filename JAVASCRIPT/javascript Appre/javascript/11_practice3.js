
//  Chapter - 3 ,  pratice set

let marks = {
    soni : 76 ,
    shakil : 90 ,
    payal : 56 ,
    monika : 4 
}


// problem no 1 
for (let i =0; i<Object.keys(marks).length;i++){
console.log("The marks of " + Object.keys(marks)[i] + ' are ' + marks[Object.keys(marks)[i]]);
}




// problem no 2 
for (let key in marks){
    console.log("The marks of " + key + ' are ' + marks[key]);
    }





// problem of 3

let cn = 43
let i 
while ( i !=cn ){
    i = prompt("Enter a number")
}
console.log("you have entered a correct number")



// problem no 4 
const mean = ( a , b , c, d) => {
    return ( a+b+c+d ) / 4
} 
console.log(mean( 4,5,6,7))

























