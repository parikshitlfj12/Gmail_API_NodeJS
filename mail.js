var express = require('express');
var app = express();
var mongoose = require('mongoose');
const Product = require('./schema');
const fs = require('fs');
const nodemailer = require('nodemailer');
var {google} = require('googleapis');
const OAuth2 = google.auth.OAuth2;


var CLIENT_ID = '822988449195-uep44ergugu30579vpjtegvjr9deggh7.apps.googleusercontent.com'
var CLIENT_SECRET = 'O28t5QHbyGrfKrL9Yvxt_X4E'
var REFRESHTOKEN = '1//04OBievwhPNS_CgYIARAAGAQSNwF-L9IrebSZmmZZKGVjm39cwyPGm74s4RjQIcbdjSp_CTqFrAzYe62ZBc2HfBBtl47cvKK0_ic'

const connect_and_send = function(to, subject, html) {

    const oauth2Client = new OAuth2(
        CLIENT_ID,
        CLIENT_SECRET, // Client Secret
        "https://developers.google.com/oauthplayground" // Redirect URL
    );

    oauth2Client.setCredentials({
        refresh_token: REFRESHTOKEN 
    });

    ACCESS_TOKEN = oauth2Client.getAccessToken();

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
        to: to,
        subject: subject,
        generateTextFromHTML: true,
        html: html
    };


    smtpTransport.sendMail(mailOptions, (error, response) => {
        error ? console.log(error) : console.log(response.envelope['to']);
        smtpTransport.close();
    });


    

}

exports.mailsend = connect_and_send;

///////////Retriving the mail

const Retrive = () => {
    const oauth2Client = new OAuth2(
        CLIENT_ID,
        CLIENT_SECRET, // Client Secret
        "https://developers.google.com/oauthplayground" // Redirect URL
    );

    oauth2Client.setCredentials({
        refresh_token: REFRESHTOKEN 
    });

    var util = require("util");
    oauth2Client.getAccessToken()
        .then((result, err) => {
            x =  result.token;
            
            var Gmail = require('node-gmail-api')
            gmail = new Gmail(x)
            s = gmail.messages('label:inbox', {max: 1})
        
            s.on('data', function (d) {
                
                //Email Generator
                file = util.inspect(d, true, 7, true);
                index = file.indexOf('Return-Path');
                index = index + 32;
                str = file.slice(index , index+100);

                var senderEmail = str.substring(
                    str.lastIndexOf("<") + 1, 
                    str.lastIndexOf(">")
                );
                //Checking the read or unread
                newornot = d.labelIds[0];
                    if(newornot == "UNREAD"){
                        

                        //Ticket Generator
                        var randomstring = require("randomstring");
                        ticket = randomstring.generate();
                        console.log(ticket);
                        
                        
                        let newone = new Product({EmailId: senderEmail, Ticket: ticket, status:'Open'})
                        newone.save()
                        .then((result)=> {
                        console.log("Status Stored");
                        })
                        .catch((err)=> {
                        console.log(err);
                        })
                    }
            
            });
    });
};


exports.mailrecieve = Retrive;
