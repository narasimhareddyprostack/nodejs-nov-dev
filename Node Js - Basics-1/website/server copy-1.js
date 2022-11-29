const http = require('http')
const dotenv = require('dotenv')

dotenv.config({ path: './config.env' })
let PORT = process.env.PORT
let host_Name = process.env.HOST_NAME
console.log(PORT)
let server = http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/html' })
    response.end("<h1>Hello,Good After Noon....Enjoy the day</h1>")
});
server.listen(PORT, host_Name, () => {
    console.log(`Server is running on http://${host_Name}:${PORT}`)
})