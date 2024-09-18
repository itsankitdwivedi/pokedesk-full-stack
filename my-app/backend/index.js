const express = require('express');
const cors = require('cors');
const { listPokemons } = require('./controllers/pokeController');
const app = express();
const PORT = process.env.PORT || 5000;
const axios = require('axios')

app.use(cors());
app.use(express.json());

// app.get('/api/hello', (req, res) => {
//   res.json({ message: 'Hello from the backend!' });
// });

app.get('/api/pokemons', async (req, res)=>{

  const response = await axios.get('https://pokeapi.co/api/v2/pokemon/');
  console.log('Response is ', response);
  res.json(response.data);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
