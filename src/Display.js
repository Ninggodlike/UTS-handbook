import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import Post from './Post';

import Under from './Under';
import Subject from './Subject';


class Display extends Component{



        
    
    render(){
       
       return( 
     <Row>
            <Col><Post></Post></Col>
            <Col><Subject></Subject></Col>
            <Col><Under ></Under></Col> 
            </Row>
            
           
           )
        

        
       
            
    }}


export default Display;