import React, { Component } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import poimg from './img/7.jpg';
import { Row, Col } from 'react-bootstrap';

class Post extends Component{
 
    render(){
    
        return(
        <Row>
          <Col>
            <MDBCol style={{ maxWidth: "22rem" }}>
      <MDBCard>
        <MDBCardImage className="img-fluid" src={poimg}
          waves />
        <MDBCardBody>
          <MDBCardTitle>Postgraduate students</MDBCardTitle>
          <MDBCardText>Information for Information Technology Postgraduate students.</MDBCardText>
       <MDBBtn href="post">GO</MDBBtn>
       
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    </Col>
       </Row>


        )
    }
}
export default Post;