var static = require('node-static');

//
// Create a node-static server instance to serve the './public' folder
//
var file = new(static.Server)(__dirname+'/public', {cache: 0});

var server = require('http').createServer(function (request, response) {
    request.addListener('end', function () {
      file.serve(request, response);
    });
});



server.listen(80);
