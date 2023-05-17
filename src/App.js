import React, { useEffect, useState } from "react"

const App = ({ paises }) => {

    const [buscarPais, setBuscarPais] = useState("")

    useEffect(() => {
        const txtBuscarPais = document.getElementById('txtBuscarPais')
        txtBuscarPais.addEventListener('change', console.log('cambio'))

    }, [])


    return (
        <div>
            <p>
                find countries:
                <input
                    type="text"
                    id="txtBuscarPais"
                    value={buscarPais}
                    onChange={(e) => setBuscarPais(e.target.value)}
                />
            </p>


            {paises.map(pais => (
                <div key={pais.name.common}>{pais.name.common}</div>
            ))}
        </div>
    )
}

export default App