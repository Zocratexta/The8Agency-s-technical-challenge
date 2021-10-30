import React from "react";
import "./style.css";

const Form = () => {
    return (
        <div className="form-container">
            <form className="form">
                <h4>¡Inscríbete y reserva tu lugar ahora!</h4>
                <label >Nombre</label>
                <input type="text" name="name" required/>
                <label >Apellido</label>
                <input type="text" name="lname" required/>
                <label >Correo electrónico del trabajo</label>
                <input type="text" name="email" required/>
                <label >País</label>
                <select className="form-option" name="country">
                    <option value="Argentina">Argentina</option>
                    <option value="Bolivia">Bolivia</option>
                    <option value="Brasil">Brasil</option>
                    <option value="Chile">Chile</option>
                    <option value="Colombia">Colombia</option>
                    <option value="Ecuador">Ecuador</option>
                    <option value="México">México</option>
                    <option value="Paraguay">Paraguay</option>
                    <option value="Perú">Perú</option>
                    <option value="Uruguay">Uruguay</option>
                    <option value="Venezuela">Venezuela</option>
                </select>
                <label >Número de teléfono</label>
                <input type="number" name="phone" required/>
                <label >Puesto de trabajo</label>
                <input type="text" name="job" required/>
                <button type="submit" >Inscríbete</button>
            </form>
        </div>
    )
}

export default Form;
