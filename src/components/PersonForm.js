import React from "react";

const PersonForm = ({ addNewName }) => {
    return (
        <form onSubmit={addNewName}>
            <div>name: <input id='txtNombre' /></div>
            <div>number: <input id='txtTlfno' /></div>
            <div><button type="submit">add</button></div>
        </form>
    )

}

export default PersonForm