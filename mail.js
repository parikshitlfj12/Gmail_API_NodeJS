const fs = require('fs');
const nodemailer = require('nodemailer');
var {google} = require('googleapis');
const OAuth2 = google.auth.OAuth2;


var CLIENT_ID = '822988449195-uep44ergugu30579vpjtegvjr9deggh7.apps.googleusercontent.com'
var CLIENT_SECRET = 'O28t5QHbyGrfKrL9Yvxt_X4E'
var REFRESHTOKEN = '1//04OBievwhPNS_CgYIARAAGAQSNwF-L9IrebSZmmZZKGVjm39cwyPGm74s4RjQIcbdjSp_CTqFrAzYe62ZBc2HfBBtl47cvKK0_ic'

const connect_and_send = () => {

    const oauth2Client = new OAuth2(
        CLIENT_ID,
        CLIENT_SECRET, // Client Secret
        "https://developers.google.com/oauthplayground" // Redirect URL
    );

    oauth2Client.setCredentials({
        refresh_token: REFRESHTOKEN 
    });
    const ACCESS_TOKEN = oauth2Client.getAccessToken()
    console.log("ACCESS TOKEN =============" + ACCESS_TOKEN);


    const smtpTransport = nodemailer.createTransport({
        service: "gmail",
        auth: {
            type: "OAuth2",
            user: "singhdon85@gmail.com", 
            clientId: CLIENT_ID,
            clientSecret: CLIENT_SECRET,
            refreshToken: REFRESHTOKEN,
            accessToken: ACCESS_TOKEN
        }
    });


    const mailOptions = {
        from: "singhdon85@gmail.com",
        to: "parikshit.s18@iiits.in",
        subject: "Node.js Email with Secure OAuth",
        generateTextFromHTML: true,
        html: "<b>test</b>"
    };


    smtpTransport.sendMail(mailOptions, (error, response) => {
        error ? console.log(error) : console.log(response);
        smtpTransport.close();
    });

}

exports.mail = connect_and_send;