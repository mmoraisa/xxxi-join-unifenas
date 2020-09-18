import React from 'react'

function Filme ({ filme }) {
    return (
        <div>
            <p>{filme.title}</p>
            <img src={filme.posters.profile} />
        </div>
    )
}

export default Filme