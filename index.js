var http = require("http");
const port = 8000;

http.createServer(function(req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">  
        <title>My Page</title>
      </head>
      <body>
        <h1>Hi my name is Nabeel Hamza</h1>
        <h2>I am an aspiring computer scientist studying at goldsmiths university</h2>
        <p>I am currently in my final year.</p>
        <p>Outside of my studies I enjoy playing sports.</p>
      </body>
    </html>
  `);
}).listen(port, function() {
  console.log(`Node server running on port ${port}`);
});
