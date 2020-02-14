import React from 'react';

const RemoveContact = (props) => {
    return (        
        <button className="btn btn-danger" onClick={props.remove}>Eliminar</button>
    );
}

export default RemoveContact;