import React, { Component } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import poimg from './img/7.jpg';
class Post extends Component{
  constructor (props){
    super(props);
    this.state = {test: true};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState(prevState => ({
      test: !prevState.test
    }));

    
  }
    render(){
        return(
          
            <MDBCol style={{ maxWidth: "22rem" }}>
      <MDBCard>
        <MDBCardImage className="img-fluid" src={poimg}
          waves />
        <MDBCardBody>
          <MDBCardTitle>Postgraduate students</MDBCardTitle>
          <MDBCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
        <MDBBtn href="#" onClick={this.handleClick}>{this.state.test ? 'GO' : 'BACK'}</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>

        )
    }
}
export default Post;