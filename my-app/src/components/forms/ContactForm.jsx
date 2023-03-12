import React, { useRef } from "react";
import { Contacto } from "../Contacto.class";
import PropTypes from "prop-types";
import "../../css/ContactForm.css"

const ContactForm = ({ add, length }) => {
  const nameRef = useRef("");
  const lastNameRef = useRef("");
  const emailRef = useRef("");
  const availableRef = useRef("Desconectado");

  const addContact = (e) => {
    e.preventDefault();
    const newContact = new Contacto(
      nameRef.current.value,
      lastNameRef.current.value,
      emailRef.current.value,
      availableRef.current.value
    );

    add(newContact);
  };
  return (
    <>
    <h4>Add contact</h4>
      <form
        onSubmit={addContact}
      >
        <div className="form">
          <input
            ref={nameRef}
            id="name"
            type="text"
            className="input-form"
            required
            autoFocus
            placeholder="Contact Name"
          />
          <input
            ref={lastNameRef}
            id="last-name"
            type="text"
            className="input-form"
            required
            placeholder="Contact Last Name"
          />
          <input
            ref={emailRef}
            id="email"
            type="email"
            className="input-form"
            required
            placeholder="Contact email"
          />
          <label for="select">Status</label>
          <select id="select">
            <option value={true}>Conectado</option>
            <option value={false}>Desconectado</option>
          </select>
          <button type='submit' className='btn btn-success btn-lg ms-2'>
          {length > 0 ? 'Add New Contact' : 'Create your First Contact'}
          </button>
        </div>
      </form>
    </>
  );
};

ContactForm.protoType = {
  add: PropTypes.func.isRequired,
};
export default ContactForm;
