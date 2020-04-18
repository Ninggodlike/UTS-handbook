import React, { Component } from 'react';
import { MDBAnimation } from "mdbreact";
import news from './img/11.png';
class Animation extends Component{
    render(){
        return(
            <MDBAnimation type="bounce" infinite>
            <img className="img-fluid" alt="" src={news} />
        </MDBAnimation>
        )
    }
}

export default Animation;