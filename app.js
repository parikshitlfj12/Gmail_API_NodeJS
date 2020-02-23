var express = require('express');
var app = express();
var mongoose = require('mongoose');
const path = require('path');
const Product = require('./schema');

app.use(express.urlencoded());
app.set('view engine', 'ejs');
app.use(express.static('public'));

//Importing the mail.js
const mail = require('./mail');

// mail.mailrecieve();

//Routes
app.get('/',function(req,res){

        mail.mailrecieve();
        
        Product.find({}, function (err,users) {
            if(err) console.log(err);
            res.render('index', {users: users});
        })
});


app.get('/comment',function(req,res){
    res.render('comment');
});


//For every post request at this address the email is send to the reciever.
app.post('/change', function(req,res){
    email = req.body.email;
    subject = req.body.subject;
    html = req.body.message;
    console.log(req.body);
    res.render('index');
    mail.mailsend(email, subject, html);

    Product.findOneAndUpdate({EmailId: email},{status:'open'}, function (err,users) {
        if(err) throw err;
    })
});



//Database
mongoose
    .connect('mongodb+srv://ghost:ghost@mycluster-jfog5.mongodb.net/test?retryWrites=true&w=majority')
    .then(result => {
        app.listen(3000);
    })
    .catch(err => {
        console.log(err);
    });



//Connecting to server
var server = app.listen(8081, function() {
    var host = server.address().address
    var port = server.address().port

    console.log("The App listening to http://%s:%s", host, port)
})







