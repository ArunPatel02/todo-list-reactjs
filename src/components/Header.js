import React, {  useState } from "react";

export const Header = (props) => {

    const searching = (event)=>{
        event.preventDefault();
    }

    const [searchvalue, setsearchvalue] = useState("")

  return (
      <div className="contsiner">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
        <a className="navbar-brand" href="/">TOODO's List</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            </ul>
            <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={searchvalue} onChange={(e)=>setsearchvalue(e.target.value)} />{props.searching(searchvalue)};
                <button className="btn btn-outline-success" type="submit" onClick={searching}>Search</button>
            </form>
        </div>
    </div>
    </nav>
    </div>
  );
};
