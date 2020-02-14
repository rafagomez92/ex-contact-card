import React from 'react';

const ContactCard = (props) => {
    return (        
        <div className="container">
            <div className="card mt-3 bg-danger text-white text-center" style={{width: '18rem'}}>
                <img src={props.info.imgUrl} className="card-img-top" alt="..."/>
                <div className="card-body font-weight-bold">
                    <p className="card-text">{props.info.name}</p>
                    <p className="card-text">{props.info.phone}</p>
                    <p className="card-text">{props.info.email}</p>
                </div>
            </div>
        </div>
    );
}

export default ContactCard;

