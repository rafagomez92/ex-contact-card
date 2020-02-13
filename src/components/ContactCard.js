import React from 'react';

const ContactCard = ({info}) => {
    return (        
        <div className="container">                       
            <div className="card bg-dark text-white mt-3">
                <img src={info.imgUrl} width="150" height="250" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{info.name}</h5>
                    <p className="card-text">{info.phone}</p>
                    <p className="card-text">{info.email}</p>
                </div>
            </div>
        </div>
    );
}

export default ContactCard;

