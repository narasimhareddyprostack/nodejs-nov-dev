const http = require('http')
const dotenv = require('dotenv')
const fs = require('fs')
const url = require('url')
dotenv.config({ path: './config.env' })

let PORT = process.env.PORT
let host_Name = process.env.HOST_NAME

console.log(PORT)
let server = http.createServer((request, response) => {
    let url = request.url;
    response.writeHead(200, { 'Content-Type': 'text/html' })
    console.log(url)
    if (url == '/') {
        fs.readFile('./views/index.html', 'utf-8', (err, data) => {
            if (err) throw err
            response.end(data)
        })
    }
    if (url == "/about") {
        fs.readFile('./views/about.html', 'utf-8', (err, data) => {
            if (err) throw err
            response.end(data)
        })

    }
    if (url == "/service") {
        fs.readFile('./views/service.html', 'utf-8', (err, data) => {
            if (err) throw err
            response.end(data)
        })
    }
    else {
        fs.readFile('./views/contact.html', 'utf-8', (err, data) => {
            if (err) throw err
            response.end(data)
        })
    }
});
server.listen(PORT, host_Name, () => {
    console.log(`Server is running on.... http://${host_Name}:${PORT}`)
})