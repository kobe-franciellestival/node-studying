const EventEmitter = require('events')
const fs = require('fs') //importacao de arquivos
const path = require('path') //importacao de caminho do arquivo 

const emitter = new EventEmitter()


emitter.on('log', (message) => {
    fs.appendFile(path.join(__dirname, 'log.txt'), message, err => {
        if (err) throw err
        /*
        * esta funcao joga uma determinada mensagem dentro do arquivo log.txt
        * utilizar o path. é uma formma de facilitar a localizacao do arquivo passado
        * por fim, há um tratamento simmples de erro.
        */
    })
})

function log(message){
    emitter.emit('log', message)
}

module.exports = log //exportando a funcao criada