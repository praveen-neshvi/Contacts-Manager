import "./App.css";
import Header from "./Components/Header/Header";
import Title from "./Components/Title/Title";
import Fill from "./Components/Fill/Fill";
import Main from './Components/Main/Main';
import ContactList from "./Components/ContactList/ContactList";
import { useState } from "react";
import { Switch, Route } from "react-router-dom";

function App() {
  const [contacts, setContacts] = useState([]);

  const contactDetails = (name, email) => {
    setContacts((prev) => [...prev, { name, email }]); //Retain the earlier items and add new items to the array
  };

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <Title />
          <Main />
        </Route>
        <Route path="/fill">
          <Fill contactDetails={contactDetails} />{" "}
          {/*Here we are passing the function as a prop so that this function can be used 
                                             by the Component to which we are passing */}
        </Route>
        <Route path="/contacts">
          <ContactList contactsArray={contacts} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
