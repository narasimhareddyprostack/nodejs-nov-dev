import express from 'express'
const router = express.Router()
import User from '../model/User.js'
import e from 'express'

/*
 API URL: localhost:8000/user/create
 Method:POST
 Req Fields: name,email, password
 Access Type:public
*/
router.post("/create", async (req, resp) => {
    try {

        let user = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }
        let user = await User.findOne({ email: user.email })
        if (user) {
            return resp.status(401).json({ resul:'User already Exits'})
        }

        
    }
    catch (err) { }



})
/*
 API URL: localhost:8000/user/login
 Method:POST
 Req Fields: email, password
 Access Type:public
*/
router.post("/login")
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
