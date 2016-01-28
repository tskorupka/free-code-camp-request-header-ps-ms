var express = require("express");
var app = express();

app.get('/', function (request, response) {
    var headers = request.headers;
    var ipaddress =  headers['x-forwarded-for'];
    var language = headers['accept-language'].slice(0, 5);
    var softwareRaw = headers['user-agent'];
    var softwareCut = softwareRaw.slice(softwareRaw.indexOf('(')+1, softwareRaw.indexOf(')'));
    
    response.setHeader('Content-Type', 'application/json');
    response.send(JSON.stringify({
      ipaddress: ipaddress,
      language: language,
      software: softwareCut
    }))
});

app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function () {
    console.log('listening');
});