const { PromiseProvider } = require("mongoose");
const axios = require('axios');
const apiKeyN = '2412c167348648ca95a43d0d7a58a17d';

const Noticia = {
    buscar:(filtros)=>{ //Aqui unicamente el modelo NO funcion de req y res
        let noticias={};
        axios.get('https://newsapi.org/v2/everything', {
                    params: {
                        q: filtros,
                        apiKey: apiKeyN
                    }
                })
                .then(response => {
                    console.log("News mandados");
                    noticias = response.data;
                    //console.log(noticias.articles);
                    
                })
                .catch(error => {
                    console.log(error);
                });
        
        
        //console.log(filtros);

        return new Promise((resolve,reject)=>{    
            setTimeout(() => {
                resolve(noticias);
            }, 1000);
        })
    }
    
}

module.exports = Noticia;
