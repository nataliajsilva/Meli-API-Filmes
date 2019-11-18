const filmes = require("../model/filmes.json")
const fs = require('fs');

exports.get = (request,response) => {
    console.log(request.url)
    response.status(200).send(filmes)
} 
exports.getDiretor = (request,response) => {
    const diretor = request.params.diretor
    response.status(200).send(filmes.filter(element => element.director == diretor))
} 
exports.getGenero = (request,response) => {
    console.log(request.params)
    const escolhaGenero = request.params.genre
    // const listaFilmes = filmes.filter(element => element.genre.incluides(escolhaGenero))
    let listaFilmes = [];
    for(let i=0; i < filmes.length; i++){
        for(let j=0; j < filmes[i].genre.length; j++){
            if (filmes[i].genre[j] === escolhaGenero){
                listaFilmes.push(filmes[i]);
            }
        }
    }

    if (listaFilmes.length === 0){
        response.send(" O genero não existe")
    }
    response.status(200).send(listaFilmes)
}
