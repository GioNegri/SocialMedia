const express = require("express")
const app = express()
const mongoose = require("mongoose")
require('dotenv').config()
const helmet = require("helmet")
const morgan = require("morgan")
const userRoute = require("./routes/users")
const authRoute = require("./routes/auth")
const postRoute = require("./routes/posts")

app.use(express.json())
app.use(helmet())
app.use(morgan("common"))

app.use("/api/users", userRoute)
app.use("/api/auth", authRoute)
app.use("/api/posts", postRoute)

const DB_USER = process.env.DB_USER
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD)

//entregar uma porta 
mongoose.connect(
    
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@socialmedia.r4gridk.mongodb.net/`
    )

    .then(() =>{
    console.log("Conectamos ao MongoDB")
    app.listen(3000)
})
.catch((err)=> console.log(err))