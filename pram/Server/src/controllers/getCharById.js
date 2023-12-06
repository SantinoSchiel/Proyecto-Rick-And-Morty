const axios = require('axios');

const getCharById = async (req, res) => {
    const { id } = req.params;
    const URL = `https://rickandmortyapi.com/api/character`
    //const URL = `https://rym2.up.railway.app/api/character/${id}?key=henrystaff`

    try {
        const {data} = await axios.get(`${URL}/${id}`);

            if(data.name){
                const character = {
                    id: data.id,
                    status: data.status,
                    name: data.name,
                    species: data.species,
                    origin: data.origin,
                    image: data.image,
                    gender: data.gender
                }
                return res.status(200).json(character)
            } else {
                return res.status(404).send('Not found')
            }
    } catch (error) {
        return res.status(500).send({ error: error.message })
    }
}

module.exports = getCharById;












// const axios = require('axios');
// const URL = "https://rym2.up.railway.app/api/character";
// const API_KEY = "henrystaff";



// function getCharById (res,id){
//     axios
//         .get(`${URL}/${id}?key=${API_KEY}`)
//         .then(({data}) => {
//             if(data.name){
//                 const character ={
//                     id: id,
//                     name: data.name,
//                     gender: data.gender,
//                     specie: data.specie,
//                     origin: data.origin,
//                     image: data.image,
//                     status: data.status
//                 };
//                 return res
//                     .writeHead(200, {"Content-Type": "application/json"})
//                     .end(JSON.stringify(character));
//             }
//         })
//         .catch((error) => {
//             return res
//                 .writeHead(500, {"Content-Type": "text/plain"})
//                 .end(error.message)
//         });
// }

// module.exports = getCharById