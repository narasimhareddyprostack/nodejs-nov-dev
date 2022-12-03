//create express server 
import express from 'express'
import morgan from 'morgan'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import userRouter from './router/userRouter.js'
dotenv.config({ path: './config/config.env' })

let port = process.env.PORT
//create express app 
const app = express()

//read form data 
app.use(express.json())

//enables cors 
app.use(cors())
//enable HTTP URL - debugg mode
app.use(morgan('tiny'))
app.get("/", (req, resp) => {
    resp.send('<h1>Node Server working fine</h1>')
})
//connecting to mongo db 
const mongo_url = process.env.MONGO_DB_LOCAL_URL
mongoose.connect(mongo_url)
    .then((response) => {
        console.log(`Mongo DB - Connection Successfull!`)
    })
    .catch((err) => {
        console.log(err)
        process.exit(1)
    })


app.use("/user", userRouter)
app.listen(port, () => {
    console.log(`Server is Listening on http://localhost:${port}`)
})