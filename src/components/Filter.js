import React from "react"

const Filter = ({ handleFilterChange }) => {
    return (
        <div>
            filter shown with<input id='txtFiltro' onChange={handleFilterChange} />
        </div>
    )
}

export default Filter