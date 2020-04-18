import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';
import firstimg from './img/4.jpg';
import secondimg from './img/5.jpg';
import thirdimg from './img/6.jpg';
class Hot extends Component{

render(){
return(
  <div>
  <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={firstimg}
      width="900"
      height="600"
      alt="First slide"
   
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={secondimg}
      width="900"
      height="600"
      alt="Third slide"
     
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={thirdimg}
      width="900"
      height="600"
      alt="Third slide"
     
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
)



}

}

export default Hot;
