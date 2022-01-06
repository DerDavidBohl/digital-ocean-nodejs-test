const express = require("express")

console.log('Launching app...')

const app = express()
const port = 8080

app.get('/hello-world', (req, res) => {
    res.send({message: 'Hello World!'})
})

app.listen(port, () => {
    console.log(`Application started and listening to port ${port}`)
    console.log(`Environment:`)
    console.log(process.env)
})

