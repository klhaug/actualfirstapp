import React from "react";
import { Plants } from './plantdatabase';
import CardList from './CardList';
import SearchBox from "./SearchBox";

const App = () => {
    return (
        <div className="tc">
            <h1 className="f1">Annikens Plants</h1>
            <SearchBox/>
            <CardList Plants = {Plants} />
        </div>
    );
}

export default App;