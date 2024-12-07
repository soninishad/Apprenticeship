var b=document.querySelector('body');
b.setAttribute('style','background-color:gray;');    

var h=document.createElement('h1');
body.appendChild(h);
h.innerHTML="Registration Form";
h.setAttribute('style' , 'text-align:center;')

var div=document.createElement('div');
document.body.appendChild(div);
div.setAttribute('style','border:2px solid white; height:400px; width:400px; margin:auto; padding-top:20px ; padding-left:30px ' );

//  name----------------

var spn=document.createElement('span');
div.appendChild(spn);
spn.innerHTML="Name :"
var inp=document.createElement('input');
inp.setAttribute('placeholder','Enter your name');
div.appendChild(inp);

// for br ------------------------

div.appendChild(document.createElement('br'));
div.appendChild(document.createElement('br'));

// father---------------------
var spn=document.createElement('span');
div.appendChild(spn);
spn.innerHTML="Father Name :"
var inp=document.createElement('input');
inp.setAttribute('placeholder','Enter your father name');
div.appendChild(inp);

div.appendChild(document.createElement('br'));
div.appendChild(document.createElement('br'));

//  mother-----------------------------------------------
var spn=document.createElement('span');
div.appendChild(spn);
spn.innerHTML=" Mother Name :"
var inp=document.createElement('input');
inp.setAttribute('placeholder','Enter your mother name');
div.appendChild(inp);

div.appendChild(document.createElement('br'));
div.appendChild(document.createElement('br'));

//  DOB-----------------------
var spn=document.createElement('span');
div.appendChild(spn);
spn.innerHTML="Date of Birth :"
var inp=document.createElement('input');
inp.setAttribute('type','date');
div.appendChild(inp);

div.appendChild(document.createElement('br'));
div.appendChild(document.createElement('br'));

// Email
var spn=document.createElement('span');
div.appendChild(spn);
spn.innerHTML="Email  :"
var inp=document.createElement('input');
inp.setAttribute('type',' email');
inp.setAttribute('placeholder','Enter your email');
div.appendChild(inp);

div.appendChild(document.createElement('br'));
div.appendChild(document.createElement('br'));

//  password
var spn=document.createElement('span');
div.appendChild(spn);
spn.innerHTML="Password  :"
var inp=document.createElement('input');
inp.setAttribute('type',' password');
inp.setAttribute('placeholder','Enter your password');
div.appendChild(inp);

div.appendChild(document.createElement('br'));
div.appendChild(document.createElement('br'));

//  Gender
var spn=document.createElement('spn');
spn.innerHTML="Gender  :"
div.appendChild(spn);
// console.log(span);
var inp=document.createElement('input');
inp.setAttribute('type','radio');
inp.setAttribute('name','ab');
div.appendChild(inp);

var spn=document.createElement('span');
div.appendChild(spn);
spn.innerHTML="Male";
div.appendChild(spn);

var spn=document.createElement('span');
div.appendChild(spn);
var inp=document.createElement('input');
inp.setAttribute('type','radio');
inp.setAttribute('name','ab');
div.appendChild(inp);
spn.innerHTML="Female";
div.appendChild(spn);

div.appendChild(document.createElement('br'));
div.appendChild(document.createElement('br'));

// Address
var spn=document.createElement('span');
spn.innerHTML="Address :"
div.appendChild(spn);
var texta=document.createElement('textarea');
texta.setAttribute('placeholder' , 'Enter your Address');
div.appendChild(texta);



