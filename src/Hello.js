import React, { Component } from "react";
import './Hello.css';

class Hello extends Component {
    render() {
        return (
            <div className="tc">
                <h1 className="f1">Annikens Plantedatabase</h1>
                <p>En oversikt over alle Anniken sine planter</p>
            </div>
        );
    }
}

export default Hello;