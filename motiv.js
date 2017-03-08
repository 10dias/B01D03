/**
* @author Thassio Victor <tvmcarvalho@gmail.com>
* Buscar uma mensagem motivacional na api http://forismatic.com/en/api/
    *
    */

'use strict';
const http = require('http');

const API = {
    protocol: 'http:',
    port: 80,
    hostname: 'api.forismatic.com',
    path:'/api/1.0/?method=getQuote&format=json&lang=en',
    method: 'POST',
    headers: {
        'Content-type':'application/json'
    }
};

http.request(API, function(res) {
    console.log(res);
    var finalData = '';
    res.on('data', function(d) {
        finalData +=d;
    });

    res.on('end', function() {
        finalData = JSON.parse(finalData);
        console.log(finalData);
    });
});

