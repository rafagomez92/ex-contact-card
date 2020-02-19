import React, { Component } from 'react';
// import contactsData from '../contactsData';
import ContactCard from '../components/ContactCard';
// import AddContact from '../components/AddContact';
// import RemoveContact from '../components/RemoveContact';
import FormContainer from './FormContainer'


class Directory extends Component {    
constructor() {
    super();
    this.state = {
        contacts: []            
    };
    //bindear el contexto para acceder a this
    // this.addContact = this.addContact.bind(this);
    // this.removeContact = this.removeContact.bind(this);
}

// addContact = () => {
//     this.setState({
//         contacts: contactsData
//     }    
//     );
// }

// removeContact = () => {
//     this.setState({
//         contacts: []
//     }    
//     );
// }




render() {
    const contact = this.state.contacts.map((contacto, idx) =>
    <ContactCard info={contacto} key={idx} /> );

    return(
        <>    
        <div className="container">                            
                    {/* <span className="mr-2"><AddContact add={this.addContact}/></span> */}
                    {/* <RemoveContact remove={this.removeContact}/> */}
                    <FormContainer />
                                                                 
                {contact}
        </div>

        </>
    );
}
}

export default Directory;
