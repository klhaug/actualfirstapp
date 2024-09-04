import React, { Component } from "react";
import './Hello.css';

class Hello extends Component {
    render() {
        return (
            <div className="tc">
                <h2 className="f2">wow, this is React!</h2>
                <h1 className="f1">Welcome to the Matrix</h1>
                <p>this is some text</p>
                <h2 className="f2">{this.props.greeting}</h2>
                <h3 className="f3">{this.props.goodbye}</h3>
            </div>
        );
    }
}

export default Hello;