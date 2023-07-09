import React, {useState} from "react";

function Search({filterName}) {



  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={e => filterName(e.target.value)}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
