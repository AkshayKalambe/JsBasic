const http = require('http');
const { response } = require('express');
const {request} = require('request');
const { json } = require('body-parser');
var url = 'http://api.openweathermap.org/data/2.5/weather?q=Mumbai,MH,IN&appid=9b7216b1d831417b71e5590f62071ff8';

var server= http.createServer(function(request,response) {

    request(url,function(err,res,body){
var data = JSON.parse(body);

response.write('<html>'+'<body>')
response.write("<h1>" + "dddd   server start ....dhakkk dhakkk-:" + data.main['temp'] + " </h1>");
response.write('</body>'+'</html>');
response.end();
    });
    

    
}).listen(3000);