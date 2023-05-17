import React, { useEffect, useState } from "react"

const App = ({ paises }) => {

    return (
        <div>
            <ol>
                {paises.map(pais => (
                    <li key={pais.name.common}>{pais.name.common}</li>
                ))}
            </ol>
        </div>
    )
}

export default App