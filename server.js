const express=require("express");

const body_parser=require("body-parser");
const cors = require('cors');
const morgan = require('morgan');

const authenticationRouter = require("./routes/authRouter");
//const speakerRouter = require("./routers/speakerRouter");
//const studentRouter = require("./routers/studentRouter");
//const eventRouter = refquire("./routers/eventRouter");
const mongoose=require("mongoose");
const multer=require("multer");
const  path=require("path");
require("dotenv").config();





//image variables
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        console.log(path.join(__dirname,"images"));
        cb(null,path.join(__dirname,"images"))
    },
    filename:(req,file,cb)=>{
        cb(null,new Date().toLocaleDateString().replace(/\//g,"-")+"-"+file.originalname)
    }
})
const fileFilter=(req,file,cb)=>{
    if(file.mimetype=="image/jpeg"||
       file.mimetype=="image/jpg"||
       file.mimetype=="image/png")
       cb(null,true)
    else
    cb(null,false)
}

const app= express();

mongoose.connect(process.env.MONGO_URL)
        .then(()=>{
            console.log("DB connected ....");
            
            // listen on port Number
            app.listen(process.env.PORT||process.env.PORT_LOCAL,()=>{
                console.log("I am Listenining .......")
            });

        })
        .catch(error=>{
                console.log(" DB Problem")
        })

// listen on port Number


//Middlewares
// app.use(morgan(":method :url"));
app.use(morgan("tiny"));

//CORS
app.use(cors());
app.use("/images",express.static(path.join(__dirname,"images")));
app.use(multer({storage,fileFilter}).single("image"))


app.use(body_parser.json());
app.use(body_parser.urlencoded({extended:false}));
//////////////////////////////////// Routers
app.use(authenticationRouter);
//app.use(speakerRouter);
//app.use(studentRouter);
//app.use(eventRouter);



//Not found MW
app.use((request,response)=>{
    response.status(404).json({data:"Not Fond"});
})

//Error MW
// app.use((error,request,response,next)=>{   //JS  code function.length
//     let status=error.status||500;
//     response.status(status).json({Error:error+""});
// })




