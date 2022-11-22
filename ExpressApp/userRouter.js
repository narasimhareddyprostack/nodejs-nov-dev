const express = require('express')
const router = express.Router();

/*
    Localhost:8080/user
*/
router.get("/", (req, res) => {
    res.send("User Routing....  - Get Request")
})
/*
    Localhost:8080/user/login
*/
router.post("/login", (req, res) => {
    //do processing
    res.send("Login Success")
})

module.exports = router