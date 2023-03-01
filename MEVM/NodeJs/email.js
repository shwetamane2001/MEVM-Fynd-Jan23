var nodemailer = require('nodemailer');

var transporter= nodemailer.createTransport({
    auth: {
        user:'shwetarmane01@gmail.com',
        pass:'wingsoffire'
    }
});

var mailOptions = {
    from: 'shwetarmane01@gmail.com',
    to: '1903057@ritindia.edu',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    }
    else {
        console.log('Email sent: ' +info.response);
    }
});