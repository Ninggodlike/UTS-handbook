import React, { Component } from 'react';

import './App.css';
//import Dashboard from './Dashboard';
import Postmajors from './Postmajors';
import Postcourses from './Postcourses';
import Postdetail from './Postdetail';
import Subdetail from './Subdetail';
import Header from './Header';
import Hot from './Hot';
import { Container, Row, Col, Table } from 'react-bootstrap';
import Footer from './Footer';
import Bachelormajors from './Bachelormajors';
import Undercourses from './Undercourses';
import Display from './Display';
import Side from './Side';
import {BrowserRouter as Router,
Route} from 'react-router-dom';
import Underdetail from './Underdetail';



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
    <Route path={"/post"} component={Postdetail}></Route>
    <Route path={"/postmajors"} component={Postmajors}></Route>
    <Route path={"/postcourses"} component={Postcourses}></Route>
    <Route path={"/subjects"} component={Subdetail}></Route>
    <Route path={"/bachelormajors"} component={Bachelormajors}></Route>
    <Route path={"/undercourses"} component={Undercourses}></Route>
    <Route path={"/under"} component={Underdetail}></Route>
     
     <Row><Col>
     <Table>
    <thead>
      <tr style={{textAlign:"center"}}>
        
        <th style={{fontSize:"30px", fontFamily:"cursive"}}><a href="https://www.uts.edu.au/news" target="blank" rel="noopener noreferrer">UTS News</a></th>
        
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
