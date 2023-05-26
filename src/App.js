import React, { useEffect, useState } from "react"
import axios from "axios"

const App = () => {
    const [paises, setPaises] = useState([])
    const [paisesFiltrados, setPaisesFiltrados] = useState([])
    const [loading, setLoading] = useState(true) // Variable de estado para el estado de carga

    useEffect(() => {
        axios.get("https://studies.cs.helsinki.fi/restcountries/api/all").then((response) => {
            setPaises(response.data);
            setLoading(false); // Una vez que los datos se han descargado, establecer loading en false
        });
    }, []);

    const handleChange = (event) => {
        let value = event.target.value;
        const filtrados = paises.filter(pais =>
            pais.name.common.toLowerCase().includes(value.toLowerCase())
        );
        setPaisesFiltrados(filtrados);
    };

    return (
        <div>
            <p>
                Buscar país: <input type="text" id="txtBuscarPais" onChange={handleChange}></input>
            </p>
            {loading ? (
                <p>Obteniendo datos del servidor...</p>
            ) : (
                <>
                    <p>{paisesFiltrados.length}</p>
                    {paisesFiltrados.length > 0 ? (
                        paisesFiltrados.length === 1 ? (
                            <>
                                <h2>{paisesFiltrados[0].name.common}</h2>
                                <p>Capital: {paisesFiltrados[0].capital}</p>
                                <p>Population: {paisesFiltrados[0].population}</p>
                                <h3>Languages</h3>
                                {Object.entries(paisesFiltrados[0].languages).map(([key, value]) => (
                                    <p key={key}>{value}</p>
                                ))}
                                <img src={paisesFiltrados[0].flags.png} alt="Flag" style={{ width: '15vh' }} />
                            </>
                        ) : paisesFiltrados.length < 11 ? (
                            <ol>
                                {paisesFiltrados.map((pais) => {
                                    return <li key={pais.name.common}>{pais.name.common}</li>;
                                })}
                            </ol>
                        ) : (
                            <p>Demasiadas respuestas, especifique otro filtro</p>
                        )
                    ) : (
                        <p>No se encontraron resultados</p>
                    )}
                </>
            )}
        </div>

    )
}

export default App