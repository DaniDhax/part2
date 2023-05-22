import React, { useEffect, useState } from "react"
import axios from "axios"

const App = () => {
    const [paises, setPaises] = useState([])

    useEffect(() => {
        axios
            .get('https://restcountries.com/v3.1/all')
            .then(response => {
                setPaises(response.data)
            })
    }, [])

    return (
        <div>
            <ol>
                {paises.map((pais) => {
                    return (
                        <li key={pais.name.common}>{pais.name.common}</li>)
                })}
            </ol>
        </div>
    )
}

export default App