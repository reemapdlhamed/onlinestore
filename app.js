require("dotenv").config();
const express = require("express")
const app = express()
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const morgan = require('morgan');
const cors = require('cors');
const asyncHandler = require('express-async-handler')


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
const authenticationRouter = require("./routes/authRouter");
<<<<<<< Updated upstream
app.use(authenticationRouter);

=======
const productRouter = require("./routes/productRouter");
const categoryRouter = require("./routes/categoryRouter");
const cartRouter = require("./routes/cartRouter");

app.use(authenticationRouter);
app.use(productRouter);
app.use(categoryRouter);
app.use(cartRouter);

//Import Order Router
const orderRouter = require("./routes/orderRouter");
app.use(orderRouter);
>>>>>>> Stashed changes

//Not found MW
app.use((request, response) => {
    response.status(404).json({ data: "Not Found" });
})

//Error MW
app.use((error, request, response, next) => {   //JS  code function.length
    let status = error.status || 500;
    response.status(status).json({ Error: error + "" });
})
//TODO: Error middleware for async functions
// express.get('/', asyncHandler(async (req, res, next) => {
// 	const bar = await foo.findAll();
// 	res.send(bar)
// }))

