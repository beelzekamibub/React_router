import React from 'react';
import { Link } from "react-router-dom";//render to anchor tags but not talking to the server for it

const NavComponent = (props) => {
    return (
        <div className='Nav'>
            <form onSubmit={(e) => e.preventDefault()} className="searchForm">
                <label htmlFor='search'>Search Posts</label>
                <input id='search'
                    type='text'
                    placeholder='Search Posts'
                    value={props.search}
                    onChange={(e) => props.setSearch(e.target.value)}></input>
            </form>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Post">MakeNewPost</Link></li>
                <li><Link to="/About">About</Link></li>
            </ul>
        </div>
    )
}

export default NavComponent