import React from 'react';
import {Navbar, Nav, NavDropdown, FormControl, Button, Form, NavLink} from "react-bootstrap";
import './styles.scss'
import { Link } from  "react-router-dom"
const NavbarMain = () => {
    return (

            <Navbar bg="light" expand="lg"   >
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">

                        <Link to="/" className='lnk'><h3>Home</h3></Link>
                        <NavDropdown title="Transactions" id="basic-nav-dropdown" >
                            <Link to ={"/add-expense/"}  className='lnk' >add expense </Link >
                            <NavDropdown.Item href="#action/3.2">remove expense</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">add salary</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">extra money</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
    );
};

export default NavbarMain;
