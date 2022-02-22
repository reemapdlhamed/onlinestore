require("dotenv").config();
const express = require("express")
const app = express()
const bodyParser = require("body-parser");
const mongoose = require("mongoose");


app.use(bodyParser.json());

//Import Routes
const authenticationRouter = require("./routers/userAuthRouter");

app.use(authenticationRouter);

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