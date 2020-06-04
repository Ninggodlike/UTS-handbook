import React, { Component } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import unimg from './img/8.jpg';
class Under extends Component {
 
     render (){
      //console.log(this.props.a);
     return(
<MDBCol style={{ maxWidth: "22rem" }}>
      <MDBCard>
        <MDBCardImage className="img-fluid" src={unimg}
          waves />
        <MDBCardBody>
          <MDBCardTitle>Undergrduate students</MDBCardTitle>
          <MDBCardText>Information for Information Technology Undergraduate students.</MDBCardText>
          <MDBBtn href="under" color="secondary" >Go</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  
 )
 }

}
export default Under;