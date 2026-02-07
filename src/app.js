import cookieParser from 'cookie-parser'
import cors from 'cors'
import express from 'express'
import morgan from "morgan"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())
app.use(morgan("dev"))
app.use((req,res,next)=>{
    console.log("REQ HIT:", req.method, req.url)
    next()
})

// routes
import userRouter from "./routes/user.routes.js"

app.use("/api/v1/users", userRouter)

export {app}
