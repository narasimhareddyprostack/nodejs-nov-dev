const jwt = require('jsonwebtoken')
let user = {
    id: 102,
    name: "Priyanka Gandhi",
    password: "123456789",
    email: 'rahul@gmail.com'
}
let payload = {
    id: user.id,
    email: user.email
}
let skey = '19750101DOB'
let token = jwt.sign(payload, skey, { expiresIn: 60000 })
console.log(token)

let user_Id = jwt.verify(token, skey)
console.log(user_Id)