const http = require("http");
const data = require("./utils/data");

const PORT = 3001;

const server = http.createServer((req, res) => {

    res.setHeader('Access-Control-Allow-Origin', '*');

    // Verifica si la URL incluye "/rickandmorty/character".
    if (req.url.includes("/rickandmorty/character")) {
        // Obtiene el id del personaje desde la URL.
        const id = req.url.split("/").pop();

        // Busca el personaje por id en el archivo data.js.
        const character = data.find((char) => char.id === Number(id));

        // Envía como respuesta un JSON con el personaje.
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(character));
    }
})

server.listen(PORT, "localhost")