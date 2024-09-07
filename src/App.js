import React, { Component } from "react";
import { Plants } from './plantdatabase';
import CardList from './CardList';
import SearchBox from "./SearchBox";

class App extends Component {
    constructor() {
        super()
        this.state = {
            plants : Plants,
            searchfield: ''
        }
    }



    onSearchChange = (event) => {
        this.setState({searchfield : event.target.value})
    }
    
    render() {
        const filteredPlants = this.state.plants.filter(plant => {
            return plant.navn.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return (
            <div className="tc">
                <h1 className="f1">Annikens Plants</h1>
                <SearchBox searchChange = {this.onSearchChange}/>
                <CardList plants = {filteredPlants} />
            </div>
        );
    }
}

export default App;