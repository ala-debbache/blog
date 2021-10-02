import React from "react";
import { Link } from 'react-router-dom';
import '../../styles/navBar.css';

const navBar = (props)=> {
    return (
        <div className="navbar">
            <h1>Blog</h1>
            <ul>
                <li><Link to="/">Home</Link></li>|
                <li><Link to="/blog">Blog</Link></li>|
                <li><Link to="/create">Create Post</Link></li>|
                <li><Link to="/about">About</Link></li>
            </ul>
        </div>
    );
}

export default navBar;