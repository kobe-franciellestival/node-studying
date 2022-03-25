const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

const port = normalizePort(process.env.PORT || '5000')
//seta uma porta pelo process.env - caso nao venha nada ele seta a porta 5000
app.set('port', port)

const server = http.createServer(app)
const router = express.Router()
//CRUD

//read
const route = router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Node Store API",
        version: "0.0.1"
    })
})

//C
const create = router.post('/', (req, res, next) => {
    res.status(201).send(req.body)
})

//update
const put = router.put('/:id', (req, res, next) => {
    const id = req.params.id
    res.status(200).send({
        id: id, 
        item: req.body
    })
})

//delete
const del = router.delete('/', (req, res, next) => {
    res.status(200).send(req.body)
})

app.use('/', route)
app.use('/products', create)
app.use('/products', put)
server.listen(port)
server.on('error', onError)

console.log("API rodando na porta " + port)

function normalizePort(val) { //funcao do express que verifica porta disponivel pra rodar o servidor
    const port = parseInt(val, 10)

    if (isNaN(port)) { //verifica se nao eh um num, e retorna 10. 
        return val
    }
    if (port >= 0) { //se for maior ou igual a 0 retorna o num da porta
        return port;
    }
    return false //se cair aqui nao retorna nada.
}

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error
    }

    const bind = typeof port === 'string' ?
        'Pipe ' + port :
        'Port ' + port

    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges')
            process.exit(1)
            break

        case 'EADDRINUSE' :
            console.error(bind + ' is already in use')
            process.exit(1)
            break
        default:
            throw error
    }
}