import React, { Component } from 'react';

import './App.css';
import Dashboard from './Dashboard';
import Test from './Test';

import Header from './Header';
import Hot from './Hot';
import { Container, Row, Col, Table } from 'react-bootstrap';
import Footer from './Footer';

import Display from './Display';
import Side from './Side';
import {BrowserRouter as Router,
Route} from 'react-router-dom';



class App extends Component{

render(){

return(
  <div>
  <Router>
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
        
        <th style={{fontSize:"30px", fontFamily:"cursive"}}>Quick Start</th>
        
      </tr>
    </thead>
    </Table>
     </Col>
        </Row>
   
   
    <Route exact path={"/"} component={Display}></Route>
    <Route path={"/post"} component={Test}></Route>
    
     
     <Row><Col>
     <Table>
    <thead>
      <tr style={{textAlign:"center"}}>
        
        <th style={{fontSize:"30px", fontFamily:"cursive"}}>UTS News</th>
        
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

     </Router> 
               
</div>
)
}
}

export default App;
