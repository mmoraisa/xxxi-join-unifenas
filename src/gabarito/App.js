import React, { useEffect, useState } from 'react'
import Movie from './components/Movie'

const App = () => {

    const [query, setQuery] = useState('narnia')
    const [movies, setMovies] = useState([])

    const search = () => {
        fetch(`https://www.rottentomatoes.com/api/private/v1.0/movies.json?q=${query}`)
            .then(res => res.json())
            .then(({ movies }) => setMovies(movies))
    }

    useEffect(search, [])

    return (
        <>
            <div>
                <input
                    type="text"
                    placeholder="Filme"
                    onChange={evt => setQuery(evt.target.value)}
                    defaultValue={query} />
                <button onClick={search} type="button">Buscar</button>
            </div>
            {
                movies.map(movie => (
                    <Movie key={movie.id} movie={movie} />
                ))
            }
        </>
    )
}

export default App