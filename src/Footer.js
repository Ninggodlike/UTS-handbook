import React, { Component } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon } from "mdbreact";


class Footer extends Component{
    render(){
        return(

<MDBFooter color="elegant-color-dark" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="4">
            <h5 className="title">UTS-Handbook</h5>
            <p>Author: Ariel, Ning</p>
            <p>Status: On processing</p>
            <p>Contact Us: godlikeaust@gmail.com</p>
          </MDBCol>
          <MDBCol md="2">
            
            <ul>
              <li className="list-unstyled">
                <a href="#!">About UTS</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Campus maps</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Faculties</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Accessibility</a>
              </li>
               
            </ul>
           
          </MDBCol>
          <MDBCol md="2">
            
            <ul>
              <li className="list-unstyled">
                <a href="#!">Library</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Search catalogue</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">UTS governance</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Privacy statement</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="2">
          
            <ul>
              <li className="list-unstyled">
                <a href="#!">Staff</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Webmail</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Staff Directory</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Jobs at uts</a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol md="2">
          <a href="https://www.google.com/" target="blank" rel="noopener noreferrer"> <MDBIcon fab icon="twitter-square" size="2x" className=" ml-3" /></a>
          <MDBIcon fab icon="facebook-square"  size="2x" className=" ml-3" />
          <MDBIcon fab icon="linkedin"   size="2x" className=" ml-3"/>
          <MDBIcon fab icon="instagram"  size="2x" className=" ml-3" />
          <MDBIcon fab icon="youtube"   size="2x" className=" ml-3"/>
          </MDBCol>
          
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.uts.edu.au/" target="_blank" rel="noopener noreferrer"> https://www.uts.edu.au/ </a>
        </MDBContainer>
      </div>
    </MDBFooter>




        )
    }
}
export default Footer;