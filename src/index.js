import dotenv from 'dotenv';

dotenv.config({
    path:'./.env'
})

import { app } from './app.js';
import connectDB from './db/index.js';
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
console.log("Cloud name:", process.env.CLOUDINARY_CLOUD_NAME);



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