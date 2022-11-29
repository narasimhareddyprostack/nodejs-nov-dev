const fs = require('fs')
fs.readFile('emp1.json', 'utf-8', (err, b) => {
    if (err) throw err
    console.log(JSON.parse(b))
    fs.writeFile('user.json', b, 'utf-8', (err) => {
        if (err) throw err
    })
})