import React, { useEffect, useState } from 'react'

function Botao ({ children }) {

    const [selecionado, setSelecionado] = useState(false)

    const trocarSelecionado = () => {
        setSelecionado(!selecionado)
    }

    useEffect(() => {
        console.log(children, selecionado)
    }, [selecionado])

    return (
        <div
            onClick={trocarSelecionado}
            className={`curso ${selecionado && 'vermelho'}`}>
            <p>Curso:</p>
            <p>{children}</p>
        </div>
    )
}

export default Botao