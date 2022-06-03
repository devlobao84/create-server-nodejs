const http = require('http');
const url = require('url');
const queryString = require('query-string');
const fs = require('fs');

const server = http.createServer((req, res) => {
    let respons;

    // Creating and Updating user 🔥
    const urlparse = url.parse(req.url, true)
    const params = queryString.parse(urlparse.search);

    if (urlparse.pathname == "/create-user") {
        // Save user 🍧
        fs.writeFile('users/' + params.id + '.txt', JSON.stringify(params), function (err) {
            if (err) throw err;
            console.log('Saved!');

            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/palin');
            res.end(respons);
        });
        respons = 'Usuario criado com sucesso';
    }
    // Select the user 🛡️
    else if (urlparse.pathname == "/select-user") {
        fs.readFile('users/' + params.id + '.txt', function (err, data) {
            respons = data;

            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/palin');
            res.end(respons);
        });
    }
    
});

//  Setting localhost address/URL
const hostname = '127.0.0.1';
const port = 3000;

// Execution
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`)
})


