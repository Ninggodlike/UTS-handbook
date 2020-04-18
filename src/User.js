import React, { Component } from 'react';
import {Tabs, Tab, Form, Button} from 'react-bootstrap';

class User extends Component{
 
 constructor(){
   super();
   this.handleSubmit = this.handleSubmit.bind(this);
 }
 
 handleSubmit(event){
   event.preventDefault();
   const data = new FormData(event.target);

   fetch('http://localhost:8000', {
     method: 'POST',
     body:data,
   });
   console.log({data});
 }
  
render(){
    return(
      
        <div>
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
  <Tab eventKey="home" title="Sign in">
  <Form onSubmit={this.handleSubmit}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email"  placeholder="Enter email" required />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password"  placeholder="Password" required />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  
  <Button variant="primary" type="submit">
    Submit
  </Button>
 
</Form>
  </Tab>
  <Tab eventKey="profile" title="Log in">
  <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
 
</Form>
  </Tab>
  <Tab eventKey="contact" title="Contact" disabled>
   
  </Tab>
</Tabs>


        </div>
    )
}

}
export default User;