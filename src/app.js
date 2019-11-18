const express = require('express')
const app = express ()

// rotas
const index = require('./routes/index')
const filmes = require('./routes/filmesRoute')

app.use(express.json());//Traduz as requisições do post para Json

app.use(function(request,response,next){
    response.header('Access-Control-Allow-Origin','*')
    response.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type,Acecept')
    next ()
})

app.use('/', index)
app.use('/filmes',filmes)

module.exports = app