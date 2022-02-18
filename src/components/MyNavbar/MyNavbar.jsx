import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import AddContact from '../contact-book/AddContact';
import "../../App.css"


const MyNavbar = ({handleContacts}) => {
    return (
      <>



        <Navbar bg="dark" variant="dark">

          
          <Container>
            <Link to="/">
              <Navbar.Brand> My First React Project</Navbar.Brand>
            </Link>
            <Nav className="Menu">
              <Nav.Link>
                <NavLink to="/">Home</NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to="/counter">Counter</NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to="/meals">Meals</NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to="/contacts">Contacts</NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to="/email">Email</NavLink>
              </Nav.Link>
            </Nav>
          </Container>
          <div className="rigth-navbar-items">
          <AddContact handleContacts={handleContacts} />
        </div>
        </Navbar>
      </>
    );
};

export default MyNavbar;