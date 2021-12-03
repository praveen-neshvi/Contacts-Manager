import React from 'react'
import user from './images.png'
import './contactcard.css'
import trash from './trash.png'

function ContactCard(props) {
    const {name, email} = props.contact;
    return (
        
        <div>
        
            <div className="item">
                <div className = "item-1">
                <img src={user} alt="user" className="avatar" />
                <div className="contactName">
                    <h3> {name} </h3>
                    <h3> {email} </h3>
                </div>
                </div>
                <div className="item-2">
                    <img src={trash} alt="user" className="avatar" />
                </div>

            </div>
        </div>
    )
}

export default ContactCard
