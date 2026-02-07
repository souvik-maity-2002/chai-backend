import dotenv from 'dotenv'
import connectDB from './db/index.js';
import { app } from './app.js'

dotenv.config({
    path:'./.env'
})
connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`server is running:${process.env.PORT}`)
    })
    app.on("error",(error)=>{
    console.log("Server error ❌")
    console.log(error)
})

})
.catch((err)=>{
    console.log("Startup error ❌")
    console.log(err)
})



/*
import express from 'express';
const app=express();
(async()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("Error connecting to database");
            throw error
        })
        app.listen(process.env.PORT ||8000,()=>{
            console.log(`Server is running on port ${process.env.PORT}`);
        })
    }catch(error){
        console.log("Error connecting to database", error);
    }
})()*/