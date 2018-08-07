var http = require("http");

var port1 = 7000;

var port2 = 7500;

function requestOne(request, response) {
    response.end("You are awesome!" + request.url);
}

var server1 = http.createServer(requestOne);
server1.listen(port1, function() {
    console.log("server one is working")
});

function responseTwo(request, response) {
    response.end("You have had better days!" + request.url);
}

var server2 = http.createServer(responseTwo);
server2.listen(port2, function() {
    console.log("server two is working")
});