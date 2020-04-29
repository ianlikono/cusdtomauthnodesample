const express = require('express');
const axios = require("axios");
const app = express()
const port = 3003

app.get('/', async (req, res) => {
    //fetches token and will be used to access the server
    const resp =  await axios.get('http://localhost:3001');
    const token = await resp.data.token;
    console.log(token);
    const serverRes = await axios.get('http://localhost:3002', { params: { token: token } })
    //will return unauthorised
    // const serverResUn = await axios.get('http://localhost:3002', { params: { token: 'token' } })
    res.send(serverRes.data)
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))