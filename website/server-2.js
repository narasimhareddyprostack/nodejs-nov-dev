const http = require('http')
const dotenv = require('dotenv')
const fs = require('fs')

dotenv.config({ path: './config.env' })

let PORT = process.env.PORT
let host_Name = process.env.HOST_NAME

console.log(PORT)
let server = http.createServer((request, response) => {
    
    response.writeHead(200, { 'Content-Type': 'text/html' })
    fs.readFile('./views/index.html', 'utf-8', (err, data) => {
        if (err) throw err
        response.end(data)
    })

});
server.listen(PORT, host_Name, () => {
    console.log(`Server is running on http://${host_Name}:${PORT}`)
})