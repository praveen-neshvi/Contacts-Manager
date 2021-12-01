
import './App.css';
import Header from './Components/Header/Header'
import Title from './Components/Title/Title'
import Fill from './Components/Fill/Fill'
import ContactList from './Components/ContactList/ContactList'
import { useState } from 'react';

function App() {
  const [contacts, setContacts] = useState([]);

  const contactDetails = (name,email)=>{
    setContacts((prev) => [...prev, {name, email}]) //Retain the earlier items and add new items to the array
  }
  

  return (
    <div>
    <Header />
    <Title />
    { <Fill contactDetails={contactDetails}/>  /*Here we are passing the function as a prop so that this function can be used 
                                             by the Component to which we are passing */}
    <ContactList contactsArray = {contacts} />
    </div>
  );
}

export default App;
