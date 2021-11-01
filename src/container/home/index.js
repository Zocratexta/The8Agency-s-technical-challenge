import React from "react";
import "./style.css";
import logo from "../../assets/Group 5.jpg";
import profile from "../../assets/prado.svg";
import img from "../../assets/img-rodriguez.png";
import { Form } from "../../components";
import { postAttendee } from "../../services/axios";

const Home = () => {
    const handlerSubmit = (e) => {
        e.preventDefault();
        const attendee = {
            "name": e.target.name.value,
            "surname": e.target.lname.value,
            "email": e.target.email.value,
            "country": e.target.country.value,
            "phone": e.target.phone.value,
            "job": e.target.job.value,
        };
        postAttendee(attendee)
        e.target.name.value=("");
        e.target.lname.value=("");
        e.target.email.value=("");
        e.target.country.value=("");
        e.target.phone.value=("");
        e.target.job.value=("");
    } 

    return (
        <div className="home-container">
            <div className="info-container">
                <img className="logo" src={logo}/>
                <div className="content">
                    <p>
                    Te invitan este webinar, donde trataremos la temática de cómo humanizar la experiencia del cliente de Banca y Seguros en el nuevo entorno digital.
                    </p>
                    <p>
                    Además podremos conocer las estrategias que aplicó LOREM para generar una experiencia memorable para sus clientes, mientras se convertía en el gran Unicornio de LATAM.
                    </p> 
                    <p>
                    Escucha de primera mano la voz de nuestros especialistas:
                    </p>
                    <div className="info-img">
                        <img src={profile}/>
                        <div className="img-details">
                            <img className="images" src={img} width="75"/>
                            <div>
                                <h4 className="name">José Perez</h4>
                                <h4 className="job">Customer Service Senior Manager</h4>
                            </div>
                        </div>
                        <div className="img-details">
                            <img className="images" src={img} width="75"/>
                            <div>
                                <h4 className="name">José Perez</h4>
                                <h4 className="job">Senior Customer Success Consultant</h4>
                            </div>
                        </div>
                        <div className="img-details">
                            <img className="images" src={img} width="75"/>
                            <div>
                                <h4 className="name">José Perez</h4>
                                <h4 className="job">Gerente de Consultoría de Soluciones</h4>
                            </div>
                        </div>
                    </div>
                    <p>
                    Participa e inspírate para innovar y mejorar la interacción entre clientes y marcas con historias de éxito de empresas del ámbito financiero en América Latina.
                    </p>
                    <p>
                    ¡Te esperamos!
                    </p>
                </div>
                <img className="logo" src={logo}/>
            </div>
            <Form handlerSubmit={handlerSubmit}/>
        </div>
    )
}

export default Home;
