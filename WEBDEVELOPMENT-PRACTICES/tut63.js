
//                Backend is start here



// console.log("hello world");
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Styleng Links and Buttons ,(Pseudo selectors & more designing)</title>
      <style>
             .container{
              border: 2px solid rebeccapurple;
              background-color: rgb(245, 217, 217);
              padding: 34px;
              margin: 34px auto;
              width: 66px auto;
             }
             a{
              text-decoration:none;
              color: black;
             }
             a:hover{
                     color: rgb(237, 245, 30);       
                     background: #ffff;
             }
             a:visited{
                      color: rgb(235, 18, 239);
             }
             a:active{
              background-color: blue;
             }
             .btn{
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              font-weight: bold;
              background-color: rgb(220, 20, 20);
              padding: 6px;
              border: none;
              cursor: pointer;
              font-size: 15px;
              border-radius: 2px;
             }
             .btn:hover{
                       color: darkgoldenrod;
                       background-color: whitesmoke;
                       border: 2px solid black;
             }
  
      </style>
  </head>
  <body>
      <div class="container" id="cont1">
      <h3>This is heading</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore a saepe mollitia earum autem hic
           laudantium dolorem aspernatur excepturi debitis Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quae cumque expedita perspiciatis facere! Labore, dignissimos ullam praesentium minima dolorem necessitatibus voluptas
             explicabo tempore sapiente impedit! eveniet, unde quidem odio dolorum magni vitae perspiciatis.
            Maxime, nulla?</p>
            <a href="https://google.com" class="btn">Read more</a>
            <button class="btn">Contact us</button>
      </div>
  </body>
  </html>`);
});
server.listen(port, hostname,() => {
  console.log(`Server running at http://${hostname}:${port}/`);
});