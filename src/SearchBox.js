import React from "react";

const SearchBox = ({searchChange}) => {
    return (
        <div className="tc">
            <input 
            className="pa3 ma4 br3 ba b--green bg-lightest-blue w-40"
            type="search" 
            placeholder="Search plants"
            onChange={searchChange}/>
        </div>
    );
}

export default SearchBox;