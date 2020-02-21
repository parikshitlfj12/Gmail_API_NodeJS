const fs = require('fs');
const nodemailer = require('nodemailer');

var {google} = require('googleapis');


var CLIENT_ID = '822988449195-uep44ergugu30579vpjtegvjr9deggh7.apps.googleusercontent.com'
var CLIENT_SECRET = 'O28t5QHbyGrfKrL9Yvxt_X4E'
var REFRESHTOKEN = '1//0fFmPZVYqaWs4CgYIARAAGA8SNwF-L9IrPRmKOjJ2HLGCQvkijDYtfNopUa__rDKQlUwTho6Xzwe_RDxc5g4OjGYX02VAkTzsAPc'
var ACCESS_TOKEN = 'ya29.Il-_B0wIcMpNgdQAHFtcQ4AxhNwrwMPTzyfXP3aps0u6hRkHs_oYGnMARWv_wYofKf_aNNEDX-0QKN03RaK1KVa68VhpTF7Z1EdqMj6Jm6PaLLjfZ8dvDrpeVnx8GGpyUg'

// var transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         xoauth2: xoauth2.createXOAuth2Generator({
//             user: 'singhdon85@gmail.com',
//             clientId: CLIENT_ID,
//             clientSecret: CLIENT_SECRET,
//             refreshToken: REFRESHTOKEN, 
//             accessToken: ACCESS_TOKEN
//         })
//     }
// });

let transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: true,
    auth: {
        type: 'OAuth2',
        user: 'singhdon85@gmail.com',
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESHTOKEN,
        accessToken: ACCESS_TOKEN,
        expires: 1484314697598
    }
});

var mailOptions = {
    from: 'singhdon85@gmail.com',
    to: 'parikshit.s18@iiits.in',
    subject: 'NodeMailer ne Bheja',
    text: 'BHAIIIIIIIIIIIIIIIIIIIIIIIII'
}

transporter.sendMail(mailOptions, function(err,res){
    if (err){
        console.log(err);
    }
    else{
        console.log("Email Is Send");
    }
})

var Gmail = require('node-gmail-api')
    gmail = new Gmail(ACCESS_TOKEN)
    s = gmail.messages('label:inbox', {max: 10})
 
s.on('data', function (d) {
  console.log(d.snippet)
})




// // IMporting the create mail file here

// function authorize(credentials, callback) {
//     var clientSecret = credentials.client_secret;
//     var clientId = credentials.client_id;
//     var redirectUrl = credentials.redirect_uris;
 
//     var OAuth2 = google.auth.OAuth2;
 
//     var oauth2Client = new OAuth2(clientId, clientSecret,  redirectUrl);
 
//     // Check if we have previously stored a token.
//     fs.readFile(TOKEN_PATH, function(err, token) {
//       if (err) {
//         getNewToken(oauth2Client, callback);
//       } else {
//         oauth2Client.credentials = JSON.parse(token);
//         callback(oauth2Client);
//       }
//     });
// }



// // Load client secrets from a local file.
// fs.readFile('credentials.json', (err, content) => {
//     if(err){
//         return console.log('Error loading client secret file:', err);
//     }

//     // Authorize the client with credentials, then call the Gmail API.
//     authorize(JSON.parse(content), getAuth);
// });

// function getAuth(auth){
//     var Mail = require('./createMail.js');
//     var obj = new Mail(auth, "receiver's gmail Id", 'Subject', 'Body', 'mail');
    
//     //'mail' is the task, if not passed it will save the message as draft.
//     //attachmentSrc array is optional.
//     obj.makeBody();
//     //This will send the mail to the recipent.
// }


