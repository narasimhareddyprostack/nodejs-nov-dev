const rajni = require('fs')
rajni.readFile('emp.json', 'utf-8', (err, data) => {
    if (err) throw err
    console.log(JSON.parse(data))
})