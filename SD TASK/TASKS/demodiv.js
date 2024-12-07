var body=document.querySelector('#body');
var a=document.createElement('div');
// console.log(diva);
a.setAttribute('class','container-fluid');
// console.log(diva);
// var divb=document.createElement('div');
// divb.setAttribute('class','container-fluid');
// console.log(divb);

a.setAttribute('class' ,'row');
a.setAttribute('class','col-sm-12');
var nav=document.createElement('nav');
nav.setAttribute('class','navbar navbar-expand-lg bg-primary');
var ul=document.createElement('ul');
ul.setAttribute('class','navbar-nav me-auto mb-2 mb-lg-0');
//console.log(ul);

var li=document.createElement('li');
li.setAttribute('class','nav-item');
li.innerHTML="<a class='nav-link active' aria-current='page' href='#'>Home</a>";
ul.appendChild(li);

var li=document.createElement('li');
li.setAttribute('class','nav-item');
li.innerHTML="<a class='nav-link active' aria-current='page' href='#'>About</a>";
ul.appendChild(li);

nav.appendChild(ul);
a.appendChild(nav);
// console.log(a);

body.appendChild(a);
 
var divb=document.createElement('div');
var img=document.createElement('img');
img.src="xyz.jpg";
// img.style="width:500px";
// img.style="height:400px"
console.log(img.src);
divb.appendChild(img);



