var body=document.querySelector('#body');
var a=document.createElement('div');
// console.log(a);
a.setAttribute('class','container-fluid' );
a.setAttribute('class','row');
a.setAttribute('class','col-sm-12');

var nav=document.createElement('nav');
nav.setAttribute('class','navbar navbar-expand-lg bg-primary');

var ul=document.createElement('ul');
ul.setAttribute('class' ,'navbar-nav me-auto mb-2  mb-lg-0');
// console.log(ul);
var li=document.createElement('li');
li.setAttribute('class','nav-item')
// li.innerHTML=' <a class="nav-link active" aria-current="page" href="#">Home</a>';
ul.appendChild(li);
// console.log(li);

var li=document.createElement('li');
li.setAttribute('class','nav-item')
// li.innerHTML=' <a class="nav-link active" aria-current="page" href="#">About</a>';
ul.appendChild(li);


// Dropdown menu ............ 

var li=document.createElement('li');
li.setAttribute('class','nav-item dropdown , ps-5');
li.innerHTML='<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shiping</a>';
// ul.appendChild(li);

// var ul=document.createElement('ul');
// ul.setAttribute('class','dropdown-menu');
// console.log(ul);
// var li=document.createElement('li');
// li.innerHTML='<a class="dropdown-item" href="#">Road </a>';
// li.innerHTML='<a class="dropdown-item" href="#">Air transport</a>';
// li.innerHTML='<a class="dropdown-item" href="#">Sea transport</a>';

// li.appendChild(ul);
ul.appendChild(li);

var li=document.createElement('li');
li.setAttribute('class','nav-item dropdown ps-4');
li.innerHTML='<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Tracking</a>';
ul.appendChild(li);

var li=document.createElement('li');
li.setAttribute('class','nav-item dropdown , ps-4');
li.innerHTML='<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Design & Print</a>';
ul.appendChild(li);

var li=document.createElement('li');
li.setAttribute('class','nav-item dropdown ps-4');
li.innerHTML='<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Location</a>';
ul.appendChild(li);

var li=document.createElement('li');
li.setAttribute('class','nav-item dropdown ps-4');
li.innerHTML='<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Sports</a>';
ul.appendChild(li);


var form=document.createElement('form');
// form.innerHTML=" Form";
form.setAttribute('class','d-flex" role="search  ps-5');
form.setAttribute('style' , 'text-align:right');

var inp=document.createElement('input');
inp.setAttribute('class','form-control me-2" type="search" aria-label="Search');
inp.setAttribute('placeholder','Search');
form.appendChild(inp);
console.log(form);



var button=document.createElement('button');
button.setAttribute('class','btn btn-outline-success" type="submit');
button.innerHTML="Search";
// form.appendChild(button);

// console.log(button);

ul.appendChild(form);



nav.appendChild(ul);
a.appendChild(nav);
body.appendChild(a);

var divb=document.createElement('div');
var img=document.createElement('img');
img.src="img/abc.jpg";
console.log(img.src);
divb.appendChild(img);






