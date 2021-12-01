import React, { useState } from 'react'
import './fill.css'

function Fill({contactDetails}) {

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");

    const addContacts = (e)=>{
        e.preventDefault();                         //This is used whenever we are using onSubmit
        if(name === "" || email === ""){
            alert("Few fields are empty");
        }
        contactDetails(name, email);          //The function that was obtained from the props and now we are sending paramters to that function, defined somehwere else
        setName("");
        setEmail("");
    }
    return (
        <div className="fill-main">
            <h2 className="add">
                Add Contact
            </h2>
            <br />
            <form className="addForm" onSubmit={addContacts}>
                <div className="name">
                    <label>
                    <h3>Name</h3>
                    </label>
                    <div>
                    <input type="text" name="name" placeholder="Enter you name" value={name} onChange={(e)=> setName(e.target.value)}/>
                    {/* value should be something that you have defined in the useState earlier so that target.value would be avaialble */}

                    </div>    
                </div>
                <div className="contactNo">
                    <label>
                    <h3>Contact No.</h3>
                    </label>
                    <div>
                    <input type="text" name="email" placeholder="Enter you contact number" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                    {/* e in onClick is the synthetic event that providesconsistency by normalizing events so that they have the same properties across different browsers and platforms. */}  
                    </div>    
                </div>
                <button className="btn-add">Add</button>
            </form>
        </div>
    )
}

export default Fill
