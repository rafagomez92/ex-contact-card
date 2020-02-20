import React from 'react';

const Login = (props) => {
    const goDirectory = () => {
        props.history.push('/directory');
    }
    return(
        <div>
            <form className="card bg-secondary">              
                <input type="text" className="form-control" placeholder="Usuario o Correo Electrónico" />                                    
                <input className="form-control" placeholder="Contraseña"/>            
                <button className="btn btn-primary" onClick={goDirectory}>Ingresar</button>
            </form>
        </div>
    );
}

export default Login;