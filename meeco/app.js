import express from 'express'
const app = express();

app.get("/", (req, res) => {
    res.send("Node JS with ES6")
})
app.listen(8080, (err) => {
    if (err) throw err
    console.log(`Server Running on PORT No: 8080`)
})