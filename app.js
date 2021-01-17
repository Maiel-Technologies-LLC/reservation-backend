import express from "express";
import bodyParser from "body-parser";
import main from "./helper.js";


const app  = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.post("/mail", (req, res) => {
    
    let formData = req.body;
    let message = `Hello, ${formData.firstName}
                     has booked a reservation with your restaurant <br><br>
                     <br>Details: </br>
                     <br> First Name: ${formData.firstName},
                     <br> Last Name: ${formData.lastName},
                     <br> email: ${formData.email},
                     <br> telephone: ${formData.telephone},
                     <br> Number of Guests: ${formData.guests},
                     <br> Reservation Date : ${formData.reservationDate},
                     <br> Duration: ${formData.timeFrom} to ${formData.timeTo},
                     <br> Reservation Type: ${formData.reservationType}
                     <br> Custom Reservation Type: ${formData.others}
                     <br> Special Request: ${formData.specialRequest}`;
                     
    let recepient = "iakinnubi@gmail.com, yokhanan1@gmail.com, gavrieljonah@gmail.com, lauremanyi@gmail.com ";
    let mailSubject = "Hello From Express";

    main(recepient, mailSubject, message).catch(console.error);
   
    // let formData = req.body;

    res.status(200).json(formData);
});

app.use((req, res) => {
    res.json({"message": "hello from express in json."});
   
});


export default app;

