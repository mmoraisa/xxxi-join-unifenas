import React, { useEffect, useState } from 'react';
import './App.css';
import Filme from './componentes/Filme'

function App() {

  const [busca, setBusca] = useState('narnia')
  const [filmes, setFilmes] = useState([])

  const buscar = () => {
    fetch(`https://www.rottentomatoes.com/api/private/v1.0/movies.json?q=${busca}`)
      .then(res => res.json())
      .then(responseJSON => {
        setFilmes(responseJSON.movies)
      })
  }

  useEffect(buscar, [])

  return (
    <div className="App">
      UNIFENAS
      <div>
        <input
          onChange={evt => setBusca(evt.target.value)}
          defaultValue={busca}
          placeholder="Nome do filme"
          type="text" />
        <button
          onClick={buscar}
          type="button">Buscar</button>
      </div>
      {
        filmes.map(filme => {
          return <Filme filme={filme} />
        })
      }
    </div>
  );
}

export default App;
