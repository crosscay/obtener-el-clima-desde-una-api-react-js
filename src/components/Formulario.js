import React from 'react';

const Formulario = () => {
    return ( 
        <form>
            <div className="input-field cold s12">
                <input
                    type="text"
                    name="ciudad"
                    id="ciudad"
                />
                <label htmlFor="ciudad"> Ciudad: </label>
            </div>
            <div className="input-field cold s12">
                <select
                    name="pais"
                    id="pais"
                >
                    <option value="">-- Selecciones un país --</option>
                </select>
                <label htmlFor="pais"> País: </label>
            </div>
        </form>
    );
}
 
export default Formulario;