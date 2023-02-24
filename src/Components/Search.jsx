import React, { useState } from 'react';
// import logo from "../Assets/search_logo.png";
import '../Style/Search.css';
import { useGlobalContext } from '../Context/Context';
import { Link } from 'react-router-dom';
const Search = () => {
    const { mountain, beaches, birds, food, others } = useGlobalContext();
    const [state, setState] = useState("");

    return (
        <div className='search'>
            <div className="main-search">
                <input type="text" onChange={(e) => setState(e.target.value)} />
                <Link to='/search' onClick={() => others(state)}>Search</Link>
            </div>
            <div className='default-search'>
                <Link to='/mountain' onClick={mountain}>Mountain</Link>
                <Link to='/beaches' onClick={beaches}>Beaches</Link>
                <Link to='/bird' onClick={birds}>Birds</Link>
                <Link to='/food' onClick={food}>Food</Link>
            </div>
        </div>
    )
}

export default Search