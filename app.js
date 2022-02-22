require("dotenv").config();
const express = require("express")
const app = express()
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const morgan = require('morgan');
const cors = require('cors');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(morgan("tiny"));

//CORS
app.use(cors());


//Connect to DB
mongoose.connect(process.env.DATABASE_URL)
    .then(() => {
        console.log("DB Connected")
    })
    .catch(() => {
        console.log("DB Error.")
    }
    )





//Listen To port
app.listen(process.env.PORT_NUMBER);


//Import Routes
const authenticationRouter = require("./routers/userAuthRouter");
app.use(authenticationRouter);


//Not found MW
app.use((request, response) => {
    response.status(404).json({ data: "Not Found" });
})

//Error MW
app.use((error, request, response, next) => {
    let status = error.status || 500;
    response.status(status).json({ Error: error + "" });
})
