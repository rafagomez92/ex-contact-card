import React, { Component } from 'react';
import ContactCard from '../components/ContactCard';
import Button from '../components/Button'
import Input from '../components/Input'
import contactsData from '../contactsData';

class FormContainer extends Component {
    constructor() {
        super();
        this.state = {
            newContact: {
                name:'',
                phone:'',
                email:''
            },
            contactsSaved: contactsData
        }

        this.handleName = this.handleName.bind(this);
        this.handlePhone = this.handlePhone.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleClearForm = this.handleClearForm.bind(this);    
    }

    // Metodos
    handleName(e){
        let value = e.target.value;  //e.target es cuando se clickea el elemento

        this.setState(
            prevState => ({
                newContact: {
                    ...prevState.newContact, // con este nos sirve para guardar los valores anteriores para no perder los demas datos
                    name: value //y solo actualizamos el name
                }
            })
        );
    }
    handlePhone(e){
        let value = e.target.value;

        this.setState(
            prevState => ({
                newContact: {
                    ...prevState.newContact, 
                    phone: value 
                }
            })
        );
    }
    handleEmail(e){
        let value = e.target.value;

        this.setState(
            prevState => ({
                newContact: {
                    ...prevState.newContact, 
                    email: value 
                }
            })
        );
    }

    handleFormSubmit(e) {
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
                    email:''
                }
            }
        ));
    }

    handleClearForm(e) {
        e.preventDefault();
        this.setState(            
            {newContact: {
                name:'',
                phone:'',
                email:''
            }}
        );
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
                    handleChange={this.handleName}
                    />
                    <Input 
                    name="phone"
                    type="number" //solo recibe datos numericos
                    value={this.state.newContact.phone}
                    placeholder="Telefono"
                    handleChange={this.handlePhone}
                    />
                    <Input
                    name="email"
                    type="text"
                    value={this.state.newContact.email}
                    placeholder="Correo electrónico"
                    handleChange={this.handleEmail}
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
                </div>
            </div>
        )

    }
}


export default FormContainer;