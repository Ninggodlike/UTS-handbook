import React, { Component } from 'react';
import {Card} from 'react-bootstrap';
//import Animation from './Animation';
class Side extends Component{
    render(){
        return(
            <div style={{float:"left", position:"sticky"}}>
             <br />  
             <br />
             <br />
            <Card border="primary" style={{ width: '18rem' }}>
            <Card.Header >How to use handbook</Card.Header>
            <Card.Body>
              
              <Card.Text style={{fontFamily:"serif"}}>
              The UTS Handbook 2019 provides comprehensive information on approved courses and subjects offered in 2019. The handbook covers course content and structure, subject and elective choices, attendance patterns, and credit point requirements, as well as important course area information for current and prospective students, and general information on student services and facilities.
              </Card.Text>
            </Card.Body>
          </Card>
          <br />
        
          <Card border="secondary" style={{ width: '18rem' }}>
            <Card.Header>General information</Card.Header>
            <Card.Body>
              
              <Card.Text style={{fontFamily:"serif"}}>
              It is the policy of UTS to provide equal opportunity for all persons and to prevent discrimination and harassment.


              </Card.Text>
            </Card.Body>
          </Card>
          <br />
        
          <Card border="success" style={{ width: '18rem' }}>
            <Card.Header>Principal dates</Card.Header>
            <Card.Body>
              
              <Card.Text style={{fontFamily:"serif"}}>
              See the Principal dates for 2019 in the archived handbook.
              </Card.Text>
            </Card.Body>
          </Card>
          <br />
        
          <Card border="danger" style={{ width: '18rem' }}>
            <Card.Header>Acadamaic year dates</Card.Header>
            <Card.Body>
             
              <Card.Text style={{fontFamily:"serif"}}>
              See the Academic year dates for 2019 in the archived handbook.
              </Card.Text>
            </Card.Body>
          </Card>
          <br />
        
          <Card border="warning" style={{ width: '18rem' }}>
            <Card.Header>Student package directory</Card.Header>
            <Card.Body>
             
              <Card.Text style={{fontFamily:"serif"}} >
              Study packages are made up of courses and subjects and the sub-structures: majors, sub-majors, choice blocks and streams.  
              </Card.Text>
            </Card.Body>
          </Card>
          <br />
        
          <Card border="info" style={{ width: '18rem' }}>
            <Card.Header>Rules of the University</Card.Header>
            <Card.Body>
             
              <Card.Text style={{fontFamily:"serif"}}>
                 	
     UTS Rules 	
	
	

    UTS Student Rules
    
    UTS General Rules
    
    Table of changes to UTS Rules
              </Card.Text>
            </Card.Body>
          </Card>
          <br />
        
          
          
         </div>
        )
    }
}

export default Side