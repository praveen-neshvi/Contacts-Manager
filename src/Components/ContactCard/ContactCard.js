import React from 'react'

function ContactCard(props) {
    const {name, email} = props.contact;
    return (
        
        <div>
            <div className="item">
                <div className="contactName">
                    <h3> {name} </h3>
                    <h3> {email} </h3>
                </div>
            </div>
        </div>
    )
}

export default ContactCard
