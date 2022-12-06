import express from 'express'
const router = express.Router()
import User from '../model/User.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import e from 'express'

/*
 API URL: localhost:8000/user/create
 Method:POST
 Req Fields: name,email, password
 Access Type:public
*/
router.post("/create", async (req, resp) => {
    try {
        /*  let user = {
             name: req.body.name,
             email: req.body.email,
             password: req.body.password
         } */
        let { name, email, password } = req.body;
        console.log(name)
        let userResult = await User.findOne({ email: email })
        if (userResult) {
            return resp.status(401).json({ result: 'User already Exits' })
        }
        //hash the password or encode the password
        let salt = await bcrypt.genSaltSync(10);
        password = await bcrypt.hash(password, salt)
        console.log(password)
        let user = new User({ name, email, password })
        console.log(user)
        user = await user.save();//store into database
        resp.status(200).json({ result: "Success", user: user })
    }
    catch (err) {
        if (err) throw err;
        resp.status(500).json({ error: "500- Server Error" })
    }



})
/*
 API URL: localhost:8000/user/login
 Method:POST
 Req Fields: email, password
 Access Type:public
*/
router.post("/login", async (req, resp) => {
    //Read data from html form/ test tools
    let { email, password } = req.body;
    //verify the Registered user or not ?
    let user = await User.findOne({ email: email })
    console.log(user)
    if (!user) {
        return resp.status(401).json({ error: "User Not Register" })
    }
    //verify the password
    let flag = await bcrypt.compare(password, user.password)
    console.log(flag)
    if (!flag) {
        return resp.status(401).json({ status: "Password Not Match" })
    }
    //if user email is exists and password matches then generate JWT Token
    //payload - what basis we are generating token?
    let payload = {
        user: {
            id: user.id,
            name: user.name
        }
    }
    //generate JWT token
    jwt.sign(payload, process.env.SECRET_KEY, (err, token) => {
        if (err) throw error;
        resp.status(200).json({ status: "Login Successfull", token: token })
    })
})
/*
 API URL: localhost:8000/user/id
 Method:PUT
 Req Fields: 
  Access Type:public
*/
router.put("/:id")
/*
 API URL: localhost:8000/user/id
 Method:DELETE
 Req Fields:
 Access Type:public
*/
router.delete("/:id")



export default router;
