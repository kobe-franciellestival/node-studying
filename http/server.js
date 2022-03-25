const app = require ('./src/app')
const http = require('http')

const port = normalizePort(process.env.PORT || '5000')
//seta uma porta pelo process.env - caso nao venha nada ele seta a porta 5000
app.set('port', port)

const server = http.createServer(app)

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