import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

async function main(recepient, mailSubject, message) {
    let testAccount =  await nodemailer.createTestAccount();

    let transporter = nodemailer.createTransport({
        host: process.env.HOST,
        port: 26,
        auth: {
            user: process.env.USER_EMAIL,
            pass: process.env.EMAIL_PASSWORD,
        },
        tls: { 
            rejectUnauthorized: false 
        },
    });
   

    let info = await transporter.sendMail({
        from: process.env.USER_EMAIL,
        to: recepient,
        subject: mailSubject,
        html: message,
    });

    console.log("message sent: "+ info.messageId)
}
export default main;