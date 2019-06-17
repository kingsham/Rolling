import React, { Component } from 'react';
import "./Dice.css";

class Dice extends Component{
    render(){
        return <i className= {`Die fas fa-dice-${this.props.face} ${this.props.rolling && "shaking"}`} />;

    }
}




export default Dice;