//asyncr
const fs = require('fs')

fs.readFile('abc.txt', 'utf-8', (err, data) => {
    if (err) throw err
    console.log("one")
    fs.writeFile('xyz.txt', data, 'utf-8', (err) => {
        if (err) throw err
        console.log("Two")
    })
})
console.log("three")