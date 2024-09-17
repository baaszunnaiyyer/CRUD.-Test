const express = require('express');
const mongoose = require('mongoose')
const app = express();
const Product = require('./Models/product.model.js');
const { AutoEncryptionLoggerLevel } = require('mongodb');
const productRoute = require("./Routes/product.routes.js");

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use("/api/products", productRoute)

app.get('/' ,(req,res)=>{
    res.status(200).send("Hello world Form Node API")
})

mongoose.connect("mongodb+srv://baaszunnaiyyer:TgfIhEGuNmo3iV0M@crudtestapi.dzs51.mongodb.net/CRUDTestAPI?retryWrites=true&w=majority&appName=CRUDTestAPI")
    .then(()=>{

        console.log("Connected To the Database");

        app.listen(3000, ()=>{
            console.log("Server has started at Port 3000");
        })

    }).catch(()=>{
        console.log("Connection failed");
    })


