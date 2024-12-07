
//function 1 :
const hello = ()=>{
    console.log("Hey how are you . I am fine");
    return 'hyy' ;                  //---------> arror functions
}
let v = hello();
console.log(v)
hello();      // -----> calling the function




// function 2 : ---
function oneplusAvg (x , y) {
    console.log("done")
    return 1+ ( x+y)/2
}


let a = 1;
let b = 2;
let c =3 ;

// console.log("sum of a and b " , (a+b));
// console.log("Onle Plus Average of a and b is " , 1+(b +c)/2)
console.log("Onle Plus Average of a and b is " , oneplusAvg(a ,b))
console.log("Onle Plus Average of a and b is " , oneplusAvg(b ,c))
console.log("Onle Plus Average of a and b is " , oneplusAvg(c ,a))



// function 3 :--
const sum = (p,q)=>{
    return p+q;
}
console.log(9,7);






