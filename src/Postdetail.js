import React, { Component } from "react";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import poimg from './img/7.jpg';
import { Col, Row, Button } from 'react-bootstrap';
import unimg from './img/8.jpg';
class Postdetail extends Component {
  

  render() {
    return (
      <div>
       <Row>
         <Col> 
      <MDBCol style={{ maxWidth: "22rem" }}>
      <MDBCard>
        <MDBCardImage className="img-fluid" src={poimg}
          waves />
        <MDBCardBody>
          <MDBCardTitle>Postgraduate Majors</MDBCardTitle>
          <MDBCardText>A major consists of 36 credit points of study (normally six 6-credit-point subjects) in a related area. The name of the major completed appears on the student's academic transcript and testamur.</MDBCardText>
       <MDBBtn href="postmajors">GO</MDBBtn>
       
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
     </Col>

    <Col>
    <MDBCol style={{ maxWidth: "22rem" }}>
      <MDBCard>
        <MDBCardImage className="img-fluid" src={unimg}
          waves />
        <MDBCardBody>
          <MDBCardTitle>Postgraduate Courses</MDBCardTitle>
          <MDBCardText>The information of Postgraduate students Courses</MDBCardText>
          <MDBBtn href="postcourses" color="secondary" >Go</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    </Col>
    </Row>
    <br></br>
    <Button href="/" variant="outline-dark" size="sm" block>
    Block level button
  </Button>
  <br></br>
   
      </div>
      );
    }
}

export default Postdetail;