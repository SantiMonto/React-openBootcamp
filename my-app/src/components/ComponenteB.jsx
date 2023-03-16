import React from "react";
import PropTypes from "prop-types";
import { Contacto } from "../models/Contacto.class";

const ComponenteB = ({ contacto, key, remove, modify }) => {

  const modifyOneStatus = ()=>{
    if(contacto.conectado){
        return (<i onClick={() => modify(contacto)} className='bi-toggle-on contact-action' style={{color: 'green'}}></i>)
    }else{
        return (<i onClick={() => modify(contacto)} className='bi-toggle-off contact-action' style={{color: 'grey'}}></i>)
    }
}

  return (
    <>
      <tbody key={key}>
        <td>{contacto.nombre}</td>
        <td>{contacto.apellido}</td>
        <td>{contacto.email}</td>
        <td>{contacto.conectado ? "Conectado" : "Desconectado"}</td>
        <td>
          {modifyOneStatus()}
          <i className="bi bi-trash"style={{color: 'tomato'}} onClick={() => remove(contacto)}></i>
        </td>
      </tbody>
    </>
  );
};

ComponenteB.propTypes = {
  contacto: PropTypes.objectOf(Contacto),
};
export default ComponenteB;
