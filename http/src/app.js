const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const router = express.Router()

const indexRoute = require('./routes/index-route')
const linksRoute = require('./routes/link-route')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use('/', indexRoute)
app.use('/links', linksRoute)

module.exports = app;