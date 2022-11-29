const fs = require('fs')

let data = fs.readFileSync('abc.txt', 'utf-8');
console.log(data)


fs.readFile('abc.txt', 'utf-8', (err, data) => {
    if (err) throw err
    console.log(data)
})