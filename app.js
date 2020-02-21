var express = require('express');
var app = express();
var mongoose = require('mongoose');
const path = require('path');

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/main.html'));
});

app.post('/submit',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.use(express.static('public'));

mongoose
    .connect('mongodb+srv://ghost:ghost@mycluster-jfog5.mongodb.net/test?retryWrites=true&w=majority')
    .then(result => {
        app.listen(3000);
    })
    .catch(err => {
        console.log(err);
    });

var server = app.listen(8081, function() {
    var host = server.address().address
    var port = server.address().port

    console.log("The App listening to http://%s:%s", host, port)
})