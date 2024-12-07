var a=document.querySelector('#body');
var b =document.createElement('div');
  a.appendChild(b);

  b.setAttribute('class','container-fluid');
  var c=document.createElement('div');
  b.appendChild(c);
 c.setAttribute('class','row');

 var e=document.createElement('div');
 c.appendChild(e);
 e.setAttribute('class','col-sm-12');
//  console.log(body);

e.innerHTML='<nav class="navbar navbar-expand-lg bg-primary"><div class="container-fluid"><a class="navbar-brand" href="#">Navbar</a><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbarSupportedContent"><ul class="navbar-nav me-auto mb-2 mb-lg-0"><li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shipping</a><ul class="dropdown-menu"><li><a class="dropdown-item" href="#">Action</a></li> <li><a class="dropdown-item" href="#">Another action</a></li><li><hr class="dropdown-divider"></hr></li><li><a class="dropdown-item" href="#">Something else here</a></li></ul></li><li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Traking</a><ul class="dropdown-menu"><li><a class="dropdown-item" href="#">Action</a></li><li><a class="dropdown-item" href="#">Another action</a></li><li><hr class="dropdown-divider"></hr></li><li><a class="dropdown-item" href="#">Something else here</a></li></ul></li><li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Design & Paint</a><ul class="dropdown-menu"><li><a class="dropdown-item" href="#">Action</a></li><li><a class="dropdown-item" href="#">Another action</a></li><li><hr class="dropdown-divider"></hr></li><li><a class="dropdown-item" href="#">Something else here</a></li></ul></li><li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Location</a><ul class="dropdown-menu"><li><a class="dropdown-item" href="#">Action</a></li><li><a class="dropdown-item" href="#">Another action</a></li><li><hr class="dropdown-divider"></hr></li><li><a class="dropdown-item" href="#">Something else here</a></li></ul></li></ul><form class="d-flex" role="search"><input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input><button class="btn btn-outline-success" type="submit">Search</button></form></div></div></nav>';

 










 
