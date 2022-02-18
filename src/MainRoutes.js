import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactList from "./components/contact-book/ContactList";
import EditContact from "./components/contact-book/EditContact";

import Counter from "./components/counter/Counter";
import HomePage from "./components/HomePage/HomePage";
import Burger from "./components/meals/Burger";
import Hotdog from "./components/meals/Hotdog";
import Pizza from "./components/meals/Pizza";
import Receipts from "./components/meals/Receipts";

import MyNavbar from "./components/MyNavbar/MyNavbar";
import PageNotFound from "./components/PageNotFound/PageNotFound";

const MainRoutes = () => {
  const [contacts, setContacts] = useState([]);
  const [modal, setModal] = useState(false);
  const [editContacts, setEditContacts] = useState({});

  const handleContacts = (newObj) => {
    let newContacts = [...contacts];

    newContacts.push(newObj);
    setContacts(newContacts);
  };

  function handleDelete(id) {
    let newContacts = contacts.filter((item) => {
      return item.id !== id;
    });
    setContacts(newContacts);
  }
  const closeModal = () => {
    setModal(false);
  };
  const handleEdit = (id) => {
    let obj = contacts.reduce((prev, current) => {
      if (current.id === id) {
        return current;
      }
      return prev;
    });
    setModal(true);
    setEditContacts(obj);
  };

  const handleSave = (obj) => {
    let newContacts = contacts.map((item) => {
      if (item.id === obj.id) {
        return obj;
      }
      return item;
    });
    setContacts(newContacts);
    closeModal();
  };
  return (
    <>
      <BrowserRouter>
        <MyNavbar handleContacts={handleContacts} />
        {modal && (
          <EditContact
            handleSave={handleSave}
            editContacts={editContacts}
            closeModal={closeModal}
          />
        )}
        <Routes>
          <Route
            path="/contacts"
            element={
              <ContactList
                contacts={contacts}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
              />
            }
          />

          <Route path="/" element={<HomePage />} />
          <Route path="/counter" element={<Counter />} />

          <Route path="*" element={<PageNotFound />} />
          <Route path="/meals" element={<Receipts />} />
          <Route path="/meals/burger" element={<Burger />} />
          <Route path="/meals/pizza" element={<Pizza />} />
          <Route path="/meals/hotdog" element={<Hotdog />} />

          <Route />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default MainRoutes;
