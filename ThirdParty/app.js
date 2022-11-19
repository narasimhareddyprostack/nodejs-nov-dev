//Reading application configuration details
const dotenv = require('dotenv')
const path = require('path')

let file = path.join(__dirname, "config", "kanishka", 'config.env')
console.log(file)
dotenv.config({ path: file })

console.log(process.env.PORT)
console.log(process.env.SECRET_KEY)


