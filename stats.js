const os = require('os')
const log = require ('./logger') //importacao da funcao criada em logger.js

setInterval(() => {
    /*
    * setInterval (funcao global) é um exemplo de EventLoop, que nesse caso a cada intervalo de tempo 
    * vai rodar a funcao implementada
    */
    const { freemem, totalmem } = os
    //desestruturacao => mesma coisa que (OS = freemem) e (OS = totalmem) 

    const total = parseInt(totalmem() / 1024 / 1024)
    const mem = parseInt(freemem() / 1024 / 1024)
    const percents = parseInt((mem / total) * 100)

    const stats = {
        free: `${mem} MB `,
        total: `${total} MB `,
        usage: `${percents}%`
    /*
    * template literals `` permite que strings sejam impressas com cod js dentro de ${}
    */
    }

    console.clear()
    console.log("======= PC STATS =======")
    console.table(stats)

    log(`${JSON.stringify(stats)} \n`) //utilizando o evento importado criando um log em txt

}, 1000)

