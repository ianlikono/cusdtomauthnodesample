const express = require('express')
const app = express()
const port = 3002

//middleware checking every request
//the server is the only one aware of how to decode and verify the token.

app.use(function (req, res, next) {
    //should be sent in the header for simplicity and rush i sent it in body
    const token = req.query.token;
    // decode token and verify it is correct and acceptable
    if(token != 'abc') {
        res.status(403)
        res.send('Unauthorised')
    }else {
        next()
    }
  })

app.get('/', (req, res) => res.send('Hello World you are authorised!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))