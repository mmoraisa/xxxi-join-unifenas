import React from 'react'

const Movie = ({ movie }) => (
    <div className="movie">
        <img src={movie.posters.profile} />
    </div>
)

export default Movie