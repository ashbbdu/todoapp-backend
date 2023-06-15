const express = require("express");


const app = express()

// load config from env
require("dotenv").config();
const PORT = process.env.PORT || 5000

// middleware to parse json request body
app.use(express.json());

// import routes for TODO API
const todoRoutes = require("./routes/todos")

// mount TODO APIS

app.use("/api/v1" , todoRoutes)


// Start the server

app.listen(PORT , () => {
    console.log(`Server started at port ${PORT}`)
})


// connecting the db
const dbConnect = require("./config/database");
dbConnect()

// Default route

app.get("/" , ( req , res ) => {
    res.send(`<h1>This is homepage baby</h1>`)
})