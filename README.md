# My Safe Trip Gmail-Api using Node

=> A Go through ReadMe of extracting Information from your own Gmail account using nodeJs and API's
=> Fetch the unread mails, Send mail to other people.

# Working Pattern

Languages- 
    Frontend - HTML, CSS
    Backend - NodeJs, ExpressJs(Framework), MongoDb
    
# Steps to operate this -
1. Fork the repository into your guithub account or directly clone my repository
2. Open up the folder where you've cloned the repo.
3. You should have nodeJs preinstalled in your machine.
4. Open the CMD for windows or Terminal for linux users. 
5. Using node package installer install the dependencies

      # Installing Dependencies
       npm install express
       npm install mongoose
       npm install nodemailer
       npm install googleapis
       npm install node-gmail-api
 
6. Go through the code of app.js and mail.js file

      # App.js file changes 
        => In line 52 insert your mongodb link that you need to extract while making the database online
        
      # Mail.js file changes
            Visit the website and follow step by step to generate your Client_ID, Client_secret, RefreshToken
            https://developers.google.com/gmail/api/quickstart/nodejs
        => In line 11, 12, 13 insert your Client_ID, Client_secret, RefreshToken
        => In line 33 insert your mail Id on which you've enabled the Google-Gmail_api
        => Do the same for line 43
 
7. When all the changes are done open the terminal or cmd and type 
    # node app.js 
    
This will indicate which link to go to.
Open up your browser and you're good to go.
        
        
Issues will be considered
