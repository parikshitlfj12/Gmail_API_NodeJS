var express = require('express');
var app = express();
var mongoose = require('mongoose');
const path = require('path');
const Product = require('./schema');

app.use(express.urlencoded());
//Static Files Used
app.use(express.static('public'));

//Importing the mail.js
//Sending the Mail also. You can consider applying a loop to send multiple mails
const mail = require('./mail');

// mail.mailrecieve();

//Routes
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/comment',function(req,res){
    res.sendFile(path.join(__dirname+'/comment.html'));
});

app.post('/change', function(req,res){
    email = req.body.email;
    subject = req.body.subject;
    html = req.body.message;
    console.log(req.body);
    res.sendFile(path.join(__dirname+'/index.html'));
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

//Storting in database
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//     var RecordSchema = new mongoose.Schema({
//         EmailId: String,
//         Ticket: String,
//         status: String
//       });
    
//     var Record = mongoose.model('Record', RecordSchema);
//     var first = new Record({ EmailId: 'singhdon85@gmail.com', Ticket: 'sahjdgajhsdjabsd', status:'open' });
//     console.log(first);

//     first.save(function (err, Record) {
//         if (err) return console.error(err);
//         console.log(Record + " saved to bookstore collection.");
//     });
// });


//Connecting to server
var server = app.listen(8081, function() {
    var host = server.address().address
    var port = server.address().port

    console.log("The App listening to http://%s:%s", host, port)
})







