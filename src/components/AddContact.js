import React from 'react';

const AddContact = (props) => {
    return (        
        <button className="btn btn-danger" onClick={props.add}>Agregar</button>
    );
}

export default AddContact;