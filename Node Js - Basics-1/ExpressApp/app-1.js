const express = require('express')
const app = express()

app.get("/", (req, res) => {
    res.send("Hello,Good Evening")
})

app.get("/about", (req, resp) => {
    resp.send('<h1>Hello,Good Evening - About</h1>')
})
app.listen(8080, "127.99.88.55", (err) => {
    if (err) throw err
    console.log(`Server is Running...`)
})