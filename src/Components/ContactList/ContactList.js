import React from 'react'
import ContactCard from '../ContactCard/ContactCard';
import './contactlist.css'

function ContactList(props) {
    const renderContactsList = props.contactsArray.map((contact) => {
        return(
            <ContactCard contact={contact}/>
        );
    })

    return (
        <div className="return">
            <h2>Contact List</h2>
            {renderContactsList}
        </div>
    )
}

export default ContactList
