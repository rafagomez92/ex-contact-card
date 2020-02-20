import React from 'react';

const About = (props) => {

    const goHome = () => {        
            props.history.push('/');        
    }

    return(
        <div>
            About ...            
            <button className="btn btn-primary" onClick={goHome}>Regresar</button>
        </div>
    );
}

export default About;