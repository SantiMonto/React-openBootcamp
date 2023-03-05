import React from "react";
import PropTypes from "prop-types";
import { Contacto } from "./Contacto.class";

const ComponenteB = ({ contacto }) => {
  return (
    <div>
      <h1>Este es un contacto</h1>
      <h3>Nombre: {contacto.nombre}</h3>
      <h3>Apellido: {contacto.apellido}</h3>
      <h3>Email: {contacto.email}</h3>
      <h3>{contacto.conectado ? "Contacto En Línea" : "Contacto No Disponible"}</h3>
    </div>
  );
};

ComponenteB.propTypes = {
  contacto: PropTypes.objectOf(Contacto)
};
export default ComponenteB;
