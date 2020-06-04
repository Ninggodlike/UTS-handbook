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
                <a href="https://www.uts.edu.au/about">About UTS</a>
              </li>
              <li className="list-unstyled">
                <a href="https://maps.uts.edu.au/map.cfm">Campus maps</a>
              </li>
              <li className="list-unstyled">
                <a href="https://www.uts.edu.au/about/faculties/overview">Faculties</a>
              </li>
              <li className="list-unstyled">
                <a href="https://www.uts.edu.au/about/utsweb-statements/accessibility-statement">Accessibility</a>
              </li>
               
            </ul>
           
          </MDBCol>
          <MDBCol md="2">
            
            <ul>
              <li className="list-unstyled">
                <a href="https://www.lib.uts.edu.au/">Library</a>
              </li>
              <li className="list-unstyled">
                <a href="https://search.lib.uts.edu.au/discovery/search?search_scope=MyInst_and_CI&vid=61UTS_INST:61UTS&lang=en">Search catalogue</a>
              </li>
              <li className="list-unstyled">
                <a href="https://www.uts.edu.au/about/uts-governance/about-governance-uts">UTS governance</a>
              </li>
              <li className="list-unstyled">
                <a href="https://www.uts.edu.au/about/utsweb-statements/privacy-statement">Privacy statement</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="2">
          
            <ul>
              <li className="list-unstyled">
                <a href="https://www.uts.edu.au/staff">Staff</a>
              </li>
              <li className="list-unstyled">
                <a href="https://email.itd.uts.edu.au/email/">Webmail</a>
              </li>
              <li className="list-unstyled">
                <a href="https://email.itd.uts.edu.au/webapps/directory/byname/">Staff Directory</a>
              </li>
              <li className="list-unstyled">
                <a href="https://www.uts.edu.au/staff/jobs-uts/working-uts">Jobs at uts</a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol md="2">
          <a href="https://twitter.com/utsengage" target="blank" rel="noopener noreferrer"> <MDBIcon fab icon="twitter-square" size="2x" className=" ml-3" /></a>
          <a href="https://www.facebook.com/UTSEngage" target="blank" rel="noopener noreferrer"> <MDBIcon fab icon="facebook-square"  size="2x" className=" ml-3" /></a>
          <a href="https://www.linkedin.com/school/university-of-technology-sydney/" target="blank" rel="noopener noreferrer"> <MDBIcon fab icon="linkedin"   size="2x" className=" ml-3"/></a>
          <a href="https://www.instagram.com/utsengage/" target="blank" rel="noopener noreferrer"> <MDBIcon fab icon="instagram"  size="2x" className=" ml-3" /></a>
          <a href="https://www.youtube.com/user/utschannel" target="blank" rel="noopener noreferrer"><MDBIcon fab icon="youtube"   size="2x" className=" ml-3"/></a>
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