const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
        api_key: process.env.API_KEY ||  'c16ce433dac6f635b259c9b5509dd8ed-0f472795-b666e676', 
        domain: process.env.DOMAIN || 'sandbox6edd8836f1644c968baa2445a9247f26.mailgun.org' 
    }
};

const transporter = nodemailer.createTransport(mailGun(auth));


const sendMail = (email, subject, text, cb) => {
    const mailOptions = {
        from: email,
        to: 'aryangupta007yo@gmail.com', 
        subject:subject,
        text:text 

        
    };

    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            return cb(err, null);
        }
        return cb(null, data);
    });
}

module.exports = sendMail;