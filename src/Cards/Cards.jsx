import React, { Component } from 'react';
import Card from './CardUI';
import img1 from "../images/range.jpeg";
import img2 from "../images/car1.jpeg";
import img3 from "../images/car3.jpeg";

class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render(){
        return(
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4 d-flex justify-content-center" >
                        <Card imgsrc={img1}  title="Range Rover"/>
                    </div>
                    <div className="col-md-4 d-flex justify-content-center">
                        <Card imgsrc={img1} title="Puma"/>
                    </div>
                    <div className="col-md-4 d-flex justify-content-center">
                        <Card imgsrc={img1} title="Ford"/>
                    </div>
                    </div>                   
                </div>
        )
    }
}

export default Cards; 