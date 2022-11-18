const bcrypt = require('bcrypt')

let user = {
    email: "Rahul@gmail.com",
    password: "ILovePM",
    cc: '1234123412341234'
}
let salt = bcrypt.genSaltSync(10)
let new_Password = bcrypt.hashSync(user.password, salt)

console.log(user.password)
console.log(new_Password)