const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.post('/usuarios', async (req,res) => {
    try {
        console.log(req.body)
        res.status(200).send({ success: 'success' })


    } catch (error) {
        res.status(400).send({ error: 'Internal error' })
    }
})


app.listen(3000)