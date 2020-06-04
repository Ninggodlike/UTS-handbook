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
      <Nav.Link href="https://www.handbook.uts.edu.au/">Classic</Nav.Link>
      <NavDropdown title="Fast entry" id="basic-nav-dropdown">
        <NavDropdown.Item href="/post">Postgraduate students</NavDropdown.Item>
        <NavDropdown.Item href="/under">Undergraduate students</NavDropdown.Item>
        <NavDropdown.Item href="/subjects">All subjects</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="https://www.uts.edu.au/news">UTS news</NavDropdown.Item>
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