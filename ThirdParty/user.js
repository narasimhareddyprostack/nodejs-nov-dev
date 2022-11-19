const bcrypt = require('bcrypt')

let user = {
    email: "Rahul@gmail.com",
    password: "Judo123",
    cc: '1234123412341234'
}
let salt = bcrypt.genSaltSync(10)
let new_Password = bcrypt.hashSync(user.password, salt)

console.log(user.password)
console.log(new_Password)

let flag = bcrypt.compareSync("Judo123", new_Password)
console.log(flag)
if (flag) {
    console.log("Login Successf")
}
else {
    console.log("Try one more time")
}