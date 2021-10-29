import React from "react";
import "./style.css";

const Header = () => {
    return (
        <header>
            <div className="title">
                <button>WEBINAR</button>
                <h1>El reto de humanizar el CX financiero en 2021.</h1>
                <h1 className="text-italic">La experiencia de un Unicornio de Latam</h1>
                <h4>Miércoles 16 de diciembre | 17 hs (Horario de Quito)</h4>
            </div>
        </header>
    )
}

export default Header;
