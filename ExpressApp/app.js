const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const app = express()

dotenv.config({ path: './config.env' })
let PORT = process.env.PORT

app.use(morgan('tiny'))
app.use("/user", require('./userRouter'))
/*
URL: http://localhost:8080/
*/



app.listen(PORT, (err) => {
    if (err) throw err
    console.log(`Server Running on http://localhost:${PORT}`)
})