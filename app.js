import express from "express";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";

const app  = express();



app.use(bodyParser.urlencoded({ extended: false }));

app.post("/mail", (req, res) => {

    async function main() {
        let testAccount =  await nodemailer.createTestAccount();

        let transporter = nodemailer.createTransport({
            service: "gmail",
            host: "smtp.gmail.com",
            auth: {
                user: "maieltechnologies@gmail.com",
                pass: "mtlx2020",
            },
        });

        let info = await transporter.sendMail({
            from: "maieltechnologies@gmail.com",
            to: "iakinnubi@gmail.com",
            subject: "Hello From Express",
            text: "Mail from Nodemailer",
            html: "<b>Mail from Nodemailer</b>",
        });

        console.log("message sent: "+ info.messageId)
    }

    main();

    let formData = req.body;
    res.status(200).json(formData);
});

app.use((req, res) => {
    res.json({"message": "hello from express in json."});
});

export default app;

