const http = require('http')
let server = http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/plain' })
    response.end("Hello,Good After Noon")
});
server.listen(8080, () => {
    console.log(`Server is running on ...`)
})