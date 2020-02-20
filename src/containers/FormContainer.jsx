import React, { Component } from 'react';
import ContactCard from '../components/ContactCard';
import Button from '../components/Button'
import Input from '../components/Input'
// import contactsData from '../contactsData';
import AddContact from '../components/AddContact';

class FormContainer extends Component {
    state = {
        newContact: {
            name:'',
            phone:'',
            email:'',
            website:''
        },
        contactsSaved: []        
    }

    // Metodo generico para los inputs

    handleInput = (e) => {
        let value = e.target.value;
        let name = e.target.name;
        this.setState(
            prevState => ({
                newContact: {
                    ...prevState.newContact,
                    [name]:value
                }
            })
        )
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        let userData = this.state.newContact;
        this.setState(prevState => (
            {
                contactsSaved: [                
                    ...prevState.contactsSaved,
                    userData
                ],                 
                newContact: {
                    name:'',
                    phone:'',
                    email:'',
                    website:''
                }
            }
        ));
    }

    handleClearForm = (e) => {
        e.preventDefault();
        this.setState(            
            {newContact: {
                name:'',
                phone:'',
                email:'',
                website:''
            }}
        );
    }

    // Este es el metodo que cree para mandarlo a llamar al clickear mi boton de agregar
    addContact = () => { 
        const url = 'https://jsonplaceholder.typicode.com/users';
        fetch(url)
            .then(response => response.json())
            .then(data => {                
                this.setState({
                    contactsSaved: data
                });
            });
    }        

    render() {
        
        const contact = this.state.contactsSaved.map((contacto, idx) =>
        <ContactCard info={contacto} key={idx} /> );

        return (
            <div className="row">
                <div className="col-4 mt-2">
                    {contact}
                </div>
                <div className="col-8 mt-2">
                <h1>Formulario</h1>
                <form>
                    <Input                                         
                    name="name"
                    type="text"  //se ingresa tipo texto
                    value={this.state.newContact.name}
                    placeholder="Nombre"
                    handleChange={this.handleInput}
                    />
                    <Input 
                    name="phone"
                    type="number" //solo recibe datos numericos
                    value={this.state.newContact.phone}
                    placeholder="Telefono"
                    handleChange={this.handleInput}
                    />
                    <Input
                    name="email"
                    type="text"
                    value={this.state.newContact.email}
                    placeholder="Correo electrónico"
                    handleChange={this.handleInput}
                    />
                    <Input
                    name="website"
                    type="text"
                    value={this.state.newContact.website}
                    placeholder="Página web"
                    handleChange={this.handleInput}
                    />
                    <Button
                        action={this.handleFormSubmit}                     
                        title="Enviar"
                    />
                    <Button
                        action={this.handleClearForm}                     
                        title="Reiniciar"
                    />                    
                </form>
                {/* Este es mi botton para agregar aca mando a llamar el metodo addContact() */}
                <AddContact add={this.addContact}/>
                </div>
            </div>
        )

    }
}


export default FormContainer;