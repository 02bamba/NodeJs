const http = require("http")
const port = 8080
const httpStatus = require("http-status-codes")
const server = http.createServer()
const fs = require("fs")
const route = {
    "/" : "/View/index.html"
}

server = http.createServer( (req, res) => {
    res.writeHead(httpStatus.OK, {
        "Content-Type": "text/html"
    })
    if (route[req.url]) {
        fs.readFile([req.url], (err, data) => {
            res.end(data);
        })
    }else{
        res.end("<h1>Page note Found !</h1>")
    }
})


server.listen(port, () => {
    console.log(`server running at http://localhost:${port}`);
})



// //cet objet permettra d'afficher les data sous forme jSon
// const getJSon = (obj) => {
//     return JSON.stringify(obj, null, 3)
// }

// server
// .on("request", (req, res) => { //si une requete arv
//     let body = [] //si c'est post on recupere le corps de la requete dans body
//     req.on('data', (data) => {
//         body.push(data) //On insere les donnees dans la liste 
//     })
//     req.on('end', () => {
//         body = Buffer.concat(body).toString() // pour finir on doit concatener les donnees dans body
//         console.log(`Request body content ${body}`);
//     })

//     res.writeHead(httpStatus.OK, {
//         "Content-Type": "text/html"
//     })

//     console.log('Request: ${req.methode}');
//     console.log('URL: ${req.url}');
//     console.log('Headers: ${getJSon(req.headers)}');
// })

// server.listen(port, () => {
//     console.log(`server running at http://localhost:${port}`);
// })