// Incluindo uma bilbioteca
const http = require('http');
const url = require('url');
const queryString = require('query-string');

// Implementação  da regra de negócio 
const server = http.createServer((req, res) => {

    // Pegar a pergunta na URL 
    const params = queryString.parse(url.parse(req.url, true).search);
    // console.log(params);

    //Verificar qual pergunta é, para devolver uima reposta 
    let resposta;
    if (params.pergunta == 'melhor-filme') {
        resposta = 'Star Wars'
    }
    else if (params.pergunta == 'melhor-tecnologia-backend') {
        resposta = 'Node js'
    }
    else {
        resposta = 'Não foi dessa vez'
    }

    // Retornar  a reposta escolhida
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/palin');
    res.end(resposta);
})

//  Definindo endereço / URL localhost 
const hostname = '127.0.0.1';
const port = 3000;

// Execução
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`)
})




