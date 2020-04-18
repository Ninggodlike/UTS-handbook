import React, { Component } from 'react';
//import Animation from './Animation';
import './App.css';
import Header from './Header';
import Hot from './Hot';
import { Container, Row, Col, Table } from 'react-bootstrap';
import Footer from './Footer';
//import Newheader from './Newheader';
import Display from './Display';
import Side from './Side';
class App extends Component{

render(){

return(
<div>
  <div>
  <Header></Header>
  </div>
  <div>
    <Side></Side>
    <Container>
      <Row>
      <Col>
     <Table>
    <thead>
      <tr style={{textAlign:"center"}}>
        
        <th style={{fontSize:"30px"}}>Quick Start</th>
        
      </tr>
    </thead>
    </Table>
     </Col>
        </Row>
   
   
    <Display></Display>
    
     
     <Row><Col>
     <Table>
    <thead>
      <tr style={{textAlign:"center"}}>
        
        <th style={{fontSize:"30px"}}>UTS News</th>
        
      </tr>
    </thead>
    </Table>
     </Col></Row>
     <Row>
     <Col><Hot></Hot></Col>
     </Row>
    
      </Container>
      <Footer></Footer>
     
      </div>
</div>

)
}
}

export default App;
