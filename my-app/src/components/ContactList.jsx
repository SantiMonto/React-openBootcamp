import React, { useState } from "react";
import { Contacto } from "../models/Contacto.class";
import "../css/ComponenteB.css";
import ComponenteB from "./ComponenteB";
import ContactForm from "./forms/ContactForm";

const ContactList = () => {
  const contact1 = new Contacto(
    "Santiago",
    "Montoya",
    "smonto@prueba.com",
    true
  );
  const contact2 = new Contacto("Paula", "Villa", "pvilla@prueba.com", false);
  const contact3 = new Contacto("Juan", "Montoya", "jmonto@prueba.com", true);
  const defaultList = [contact1, contact2, contact3];
  const [contacts, setContacts] = useState(defaultList);

  const addContact = (contact) => {
    const tempContacts = [...contacts];
    tempContacts.push(contact);
    setContacts(tempContacts);
  };

  function modifyStatus(contact) {
    const index = contacts.indexOf(contact);
    const tempContacts = [...contacts];
    tempContacts[index].conectado = !tempContacts[index].conectado;
    setContacts(tempContacts);
  }
  const deleteContact = (contact) => {
    const index = contacts.indexOf(contact);
    const tempContacts = [...contacts];
    tempContacts.splice(index, 1);
    setContacts(tempContacts);
  };

  const length = contacts.length;
  return (
    <>
      <h2>Contacts List</h2>
      <div className="container">
        <table className="table">
          <thead>
            <th scope="col">Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Status</th>
            <th scope="col">Actions</th>
          </thead>
          {contacts.map((contact, index) => {
            return (
              <ComponenteB
                contacto={contact}
                key={index}
                remove={deleteContact}
                modify={modifyStatus}
              />
            );
          })}
        </table>
      </div>
      <div>
        <ContactForm add={addContact} length={length} />
      </div>
    </>
  );
};

export default ContactList;
