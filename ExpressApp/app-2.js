const express = require('express')
const app = express()
/*
API URL:localhost:8080
Method:GET
Req Fields:None
Access Type:Public
*/
app.get("/", (req, res) => {
    res.send("Hello,Good Evening")
})
/*
API URL:localhost:8080/about
Method:GET
Req Fields:None
Access Type:Public
*/
app.get("/about", (req, resp) => {
    resp.send('<h1>Hello,Good Evening - About</h1>')
})
app.listen(8080, "127.99.88.55", (err) => {
    if (err) throw err
    console.log(`Server is Running...`)
})