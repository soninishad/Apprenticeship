

//                Chapter - 2 ,  pratice set

// PROBLEM NO.1 ---

let age = prompt("What is your age ? ") 
if(age>10 && age<20 ) {
    console.log("Your age lies between 10 and 20 " ) ;

} else {
    console.log("Your age does not lies between 10 and 20 " ) ;

}


// Problem no 2 :

// Switch case

let ages = prompt("what is ur age ? " ) 
switch(ages){
    case '12' :
        console.log('your age is 12')
        break
    case '13' :
            console.log('your age is 13')  
            break
     case '14' :
            console.log('your age is 14')  
            break
     case '15' :
            console.log('your age is 15')
            break 
      default : 
      console.log("your age is not special");      
}



// Problem no 3 : 
 
 let num = prompt(" Number is ? ")
 num = Number.parseInt(age)
 if ( num%2==0 && num%3 == 0 ){
    console.log( "your num is divisible by 2 and 3 ") ;
 }
else{
    console.log( "your num is not  divisible by 2 and 3 ") ;

}



// Problem no 4 : 
let AGE = 19
let a = AGE>18 ? "you can drive " : " you can not drive "
console.log(a);













