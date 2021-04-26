import React, {Fragment} from 'react'

const Formulario = () => {
    return (
        <Fragment>
            <h2>Crear Cita</h2>
            <form>
                <label>Mascota</label>
                <input 
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre de la mascota"

                />
                <label>Dueño</label>
                <input 
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre del dueño"

                />
                <label>Fecha</label>
                <input 
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    
                />
                <label>Hora</label>
                <input 
                    type="time"
                    name="hora"
                    className="u-full-width"
                
                />
                <label>Información</label>
                <textarea
                    name="info"
                    className="u-full-width"
                    placeholder="Síntomas o información relevante"
                >

                </textarea>

                <button
                    type="submit"
                    className="u-full-width button-primary"
                >
                    Agregar Cita
                </button>
 
            </form>
            
        </Fragment>
    )
}

export default Formulario
