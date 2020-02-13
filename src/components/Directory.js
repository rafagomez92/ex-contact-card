import React, { Component } from 'react';
import contactsData from '../contactsData';
import ContactCard from './ContactCard';


class Directory extends Component {
constructor() {
    super();
    this.state = {
        contacts: contactsData
    };
}
render() {
    const contact = this.state.contacts.map((contacto, idx) =>
    <ContactCard info={contacto} key={idx} /> );
    
    return(
        <>
          {contact}
        </>
    );
}
}

export default Directory;
