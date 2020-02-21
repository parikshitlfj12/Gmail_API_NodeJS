const fs = require('fs');
const nodemailer = require('nodemailer');

var {google} = require('googleapis');


var CLIENT_ID = '822988449195-uep44ergugu30579vpjtegvjr9deggh7.apps.googleusercontent.com'
var CLIENT_SECRET = 'O28t5QHbyGrfKrL9Yvxt_X4E'
var REFRESHTOKEN = '1//0fFmPZVYqaWs4CgYIARAAGA8SNwF-L9IrPRmKOjJ2HLGCQvkijDYtfNopUa__rDKQlUwTho6Xzwe_RDxc5g4OjGYX02VAkTzsAPc'
// var ACCESS_TOKEN = 'ya29.a0Adw1xeUNbFKUUqw3v9MsDheJogM_zFCicBykl1Xk5b-4oHlnk5dNUP3DHDiS9UTfQVZESQSDKT6qCRrnx_vaRmzBvHmqxwS7wTzMKFCqgCY8p8R91ahJpIjyVED76xVH_Z5Mr6bxtxxoYRN9fLsMG_8IOvPAi08Dwftw'


let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        type: 'OAuth2',
        user: 'singhdon85@gmail.com'
    }
});

transporter.set('oauth2_provision_cb', (user, renew, callback)=>{
    global.ACCESS_TOKEN = userTokens[user];
    if(!accessToken){
        return callback(new Error('Unknown user'));
    }else{
        return callback(null, accessToken);
    }
});


// ===============================================================
// let transporter = nodemailer.createTransport({
//     service: 'gmail',
//     secure: true,
//     auth: {
//         type: 'OAuth2',
//         user: 'singhdon85@gmail.com',
//         clientId: CLIENT_ID,
//         clientSecret: CLIENT_SECRET,
//         refreshToken: REFRESHTOKEN,
//         accessToken: ACCESS_TOKEN,
//         expires: 3000
//     }
// });



// var mailOptions = {

//     from: 'singhdon85@gmail.com',
//     to: 'parikshit.s18@iiits.in',
//     subject: 'NodeMailer ne Bheja',
//     text: 'BHAIIIIIIIIIIIIIIIIIIIIIIIII'
// }

// transporter.sendMail(mailOptions, function(err,res){
//     if (err){
//         console.log(err);
//     }
//     else{
//         console.log("Email Is Send");
//     }
// })

var Gmail = require('node-gmail-api')
    gmail = new Gmail(ACCESS_TOKEN)
    s = gmail.messages('label:inbox', {max:1})
 
s.on('data', function (d) {
  console.log(d.payload.mimeType)
})



