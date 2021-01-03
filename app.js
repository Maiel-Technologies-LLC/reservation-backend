import express from "express";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app  = express();



app.use(bodyParser.urlencoded({ extended: false }));

app.post("/mail", (req, res) => {

    async function main() {
        let testAccount =  await nodemailer.createTestAccount();

        let transporter = nodemailer.createTransport({
            host: "mail.mtlx.us",
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
            from: "info@mtlx.us",
            to: "iakinnubi@gmail.com",
            subject: "Hello From Express",
            text: "Mail from Nodemailer",
            html: "<b>Mail from Nodemailer</b>",
        });

        console.log("message sent: "+ info.messageId)
    }

    main().catch(console.error);

    let formData = req.body;
    res.status(200).json(formData);
});

app.use((req, res) => {
    res.json({"message": "hello from express in json."});
});

export default app;

