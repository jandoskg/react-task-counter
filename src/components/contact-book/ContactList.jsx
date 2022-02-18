import React from "react";
import { Table } from "semantic-ui-react";

import "../../App.css"
import ContactCard from "./ContactCard";

const ContactList = ({ contacts, handleDelete, handleEdit }) => {
  return (
    <>
      <Table className="Table" celled inverted selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Phone Number</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Edit/Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        {contacts.map((item) => (
          <ContactCard
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            key={item.id}
            item={item}
            handleEdit={handleEdit}
          />
        ))}
      </Table>
    </>
  );
};

export default ContactList;