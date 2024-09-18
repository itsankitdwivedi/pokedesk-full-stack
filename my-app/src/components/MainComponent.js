import React, { useEffect, useState } from 'react';

const MainComponent = () => {
  const [message, setMessage] = useState('');
  const [offset, setOffset] = useState(0);
  const [pokeList, setPokeList] = useState();

  useEffect(() => {
    fetch('http://localhost:5000/api/pokemons')
      .then(response => response.json())
      .then(data => setMessage(JSON.stringify(data.results)));
      console.log('Name is ',message.split(""));
  }, [offset]);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}

export default MainComponent;
