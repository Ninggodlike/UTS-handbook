import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import ReactLoading from 'react-loading';
export default class Bachelormajors extends Component{

    constructor(props) {
        super(props);
        this.state = { users:[],  loading:true

         };
    }
    
    callAPI() {
        fetch("http://localhost:9000/bachelormajors")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.setState({users:data,
                loading:false})
            })
    }
    
    componentDidMount() {
        this.callAPI();
    }

    render(){
        if(this.state.loading === true){
            return (
                
                <ReactLoading type={"spinningBubbles"} color={"black"} height={'20%'} width={'20%'}></ReactLoading>
         );
        }

        else {
        return(
            <div>
              <ul>
          {this.state.users &&
            this.state.users.map((item, index) => (
              <li key={index.toString()}>{item.name}</li>
              
            ))}
        </ul>

       
        <br></br>
    <Button href="under" variant="outline-dark" size="sm" block>
    Block level button
  </Button>
  <br></br>


            </div>
        )
    }}
}