import React, { Component } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import subimg from './img/10.jpg';


class Subject extends Component {
     render (){
     return(
     
<MDBCol style={{ maxWidth: "22rem" }}>
      <MDBCard>
        <MDBCardImage className="img-fluid" src={subimg}
          waves />
        <MDBCardBody>
          <MDBCardTitle>All subjects</MDBCardTitle>
          <MDBCardText>All Information Technology subjects entry.</MDBCardText>
          <MDBBtn href="subjects" color="pink">Go</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>

  
    
 )
 }
}
export default Subject;