import React, { Component } from 'react';
import {Navbar, NavDropdown, Form, Button, Nav, FormControl } from 'react-bootstrap';
import logo from './img/logo.png';
class Header extends Component{
    render(){
        return(
        <div>
            <Navbar bg="dark" expand="lg" variant="dark" sticky="top">
  <Navbar.Brand href="/"> <img
        alt=""
        src={logo}
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}UTS-Handbook</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
        </div>)
    }
}

export default Header;