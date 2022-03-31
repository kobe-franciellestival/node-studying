const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()
const router = express.Router()

//conecta ao banco
mongoose.connect('mongodb+srv://franciellestival-kobe:Kobe2020@crud-nodejs.pmzqo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')

//carregando model
const Link = require('./models/link')

//carregando as rotas
const indexRoute = require('./routes/index-route')
const linksRoute = require('./routes/link-route')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use('/', indexRoute)
app.use('/links', linksRoute)

module.exports = app;