/**
* @author Thassio Victor <tvmcarvalho@gmail.com>
* Buscar uma mensagem motivacional na api http://forismatic.com/en/api/
    *
    */

'use strict';
const http = require('http');

const API = {
    hostname: 'quotesondesign.com',
    path:'/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
};

http.get('http://' + API.hostname + API.path, function(res) {
    var finalData = '';
    res.on('data', function(d) {
        finalData +=d;
    });

    res.on('end', function() {
        finalData = JSON.parse(finalData);
        console.log('Motive-se!');
        console.log('Título: ' + finalData[0].title);
        console.log(finalData[0].content);
    });
});

