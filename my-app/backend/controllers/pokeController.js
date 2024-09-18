const axios = require('axios')

const listPokemons =  async (req, res) =>{

    const url = 'https://pokeapi.co/api/v2/pokemon';
    const pokemonData = await axios.get(url);
   
    return res.status(200).send(pokemonData.data);
};


module.exports = {listPokemons};