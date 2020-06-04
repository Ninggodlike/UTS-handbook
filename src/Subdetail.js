import React, { Component } from 'react';
import ReactLoading from 'react-loading';
import {Button, Container, Col, Row} from 'react-bootstrap';
export default class Subdetail extends Component{

    constructor(props) {
        super(props);
       this.setNext=this.setNext.bind(this);
       this.setUp=this.setUp.bind(this);
        this.state = { users:[] ,
            loading:true,
          
            current:1,
            
            goValue:0,
            

        
        };
    }
    
    callAPI() {
        fetch("http://localhost:9000/subjects")
            .then(res => res.json())
            .then(data => {
               
            this.setState((state) =>({
                users:data,
                loading:false,
           
            
          
            }))
                            
               
          // console.log(data) 
         })

          

            
    }
    
    componentDidMount() {
        this.callAPI();
        
    }

    setNext(){
        if(this.state.current<19){
            this.setState({current:this.state.current+1})
        }
    }

    setUp(){
        if(this.state.current>1){
            this.setState({current:this.state.current-1})
        }
    }
        
    

    render(){

        if(this.state.loading === true){
            return (
                
                <ReactLoading type={"spinningBubbles"} color={"black"} height={'20%'} width={'20%'}></ReactLoading>
         );
        }

        else { 
          const indexList=this.state.users.slice(15*(this.state.current-1), 15*this.state.current);
          
        return(
            <Container>
                <Row>
                    <Col>
              <ul >
          {indexList &&
          indexList.map((item, index) => (
            <li key={index.toString()}>{item.name}</li>
              
            ))}
        </ul>
          <p>{indexList.length}</p>
        </Col>
        <Col>
        <ul >
          {indexList &&
          indexList.map((item, index) => (
          <li key={index.toString()}><a href={item.href}>{item.name}</a></li>
              
            ))}
        </ul>
        </Col>
        </Row>
        <Row><Col>
        <span onClick={this.setUp} >上一页</span>
          <span>{this.state.current}页/19页</span>
                <span onClick={this.setNext}>下一页</span>
        </Col></Row>
        <Row>
            <Col>
        <br></br>
    <Button href="/" variant="outline-dark" size="sm" block>
    Block level button
  </Button>
  <br></br>
  </Col>
</Row>
</Container>

            
        )
    }}
}