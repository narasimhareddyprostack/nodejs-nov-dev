const fs = require('fs')

let data = fs.readFileSync('abc.txt', 'utf-8');
console.log(data)
console.log("Reading")

let new_Data = data + "adding new Contact"
fs.writeFileSync('xyz.txt', new_Data, 'utf-8')
console.log("Data Written Successfully")
