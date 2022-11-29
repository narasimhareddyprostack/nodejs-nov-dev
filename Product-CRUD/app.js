import express from 'express'
import mongoose from 'mongoose'
import dotEnv from 'dotenv'
import cors from 'cors'
import morgan from 'morgan'
import productRouter from './router/productRouter.js'
const app = express();

dotEnv.config({ path: './config/config.env' })
app.use(cors())
app.use(morgan('tiny'))  //HTTP logger


//how to read form data
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


//create route request 
app.get("/", (req, resp) => {
    resp.send('<h1>Welcome to Node JS App</h1>')
})


//configure user route/ product routes 
app.use("/product", productRouter)

const hostname = process.env.HOST_NAME;
const port = process.env.PORT

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

app.listen(port, hostname, () => {
    console.log(`Server is running on http://${hostname}:${port}`)
});