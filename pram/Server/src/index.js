const http = require("http");
// const data = require("./utils/data");
const getCharById = require("./controllers/getCharById");

const PORT = 3001;

  http.createServer((req, res) => {

    res.setHeader('Access-Control-Allow-Origin', '*');

    if(req.url.includes("/rickandmorty/character")){
      const id = Number(req.url.split("/").pop());
      getCharById(res, id);
    }
  }).listen(PORT, "127.0.0.1", () => {
        console.log("Run port server 3001");
      });

    // Verifica si la URL incluye "/rickandmorty/character".
    // if (req.url.includes("/rickandmorty/character")) {
    //     // Obtiene el id del personaje desde la URL.
    //     const id = req.url.split("/").pop();

    //     // Busca el personaje por id en el archivo data.js.
    //     const character = data.find((char) => char.id === Number(id));

    //     // Envía como respuesta un JSON con el personaje.
    //     if (character) {
    //         return res
    //           .writeHead(200, { "Content-Type": "application/json" })
    //           .end(JSON.stringify(character));
    //       } else {
    //         return res
    //           .writeHead(404, { "Content-Type": "application/json" })
    //           .end(JSON.stringify({ message: "Character Not Found" }));
    //       }
    //     }
    //     return res
    //       .writeHead(404, { "Content-Type": "application/json" })
    //       .end(JSON.stringify({ message: "Wrong URL" }));
    //   })
    //   .listen(PORT, "127.0.0.1", () => {
    //     console.log("Run port server 3001");
    //   });
    