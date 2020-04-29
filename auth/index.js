const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => res.send({
    //Idealy this should take in user credentials verify the credentials and generate a token.
    //this should work as the IDP
    token: 'abc'
}))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))