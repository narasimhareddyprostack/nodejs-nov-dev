const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const app = express()

dotenv.config({ path: './config.env' })
let PORT = process.env.PORT

app.use(morgan('tiny'))
/*
URL: http://localhost:8080/
*/
app.get("/", (request, response) => {
    response.send("Hello, Learning Node Js and Express for M")
})
app.get("/user/", (request, response) => {
    response.send("Hello, Learning Node Js and Express for M")
})
app.get("/user/all", (request, response) => {
    response.send("Display All Users!   ")
})
app.post("/user/add", (request, response) => {
    response.send("New , Learning Node Js and Express for M")
})
app.delete("/user/delete", (request, response) => {
    response.send("Add Req !Hello, Learning Node Js and Express for M")
})

app.put("/user/update", (request, response) => {
    response.send("Update Req! Hello, Learning Node Js and Express for M")
})


app.listen(PORT, (err) => {
    if (err) throw err
    console.log(`Server Running on http://localhost:${PORT}`)
})