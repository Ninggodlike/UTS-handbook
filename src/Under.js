import React, { Component } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import unimg from './img/8.jpg';
class Under extends Component {
     render (){
     return(
<MDBCol style={{ maxWidth: "22rem" }}>
      <MDBCard>
        <MDBCardImage className="img-fluid" src={unimg}
          waves />
        <MDBCardBody>
          <MDBCardTitle>Undergrduate students</MDBCardTitle>
          <MDBCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
          <MDBBtn href="#" color="secondary">Go</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
 )
 }
}
export default Under;