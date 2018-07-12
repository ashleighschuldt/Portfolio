import React, {Component} from 'react';
import '../styles/header.css';


export class Header extends Component {
    render(){
    return (
        <div className='header'>
            
            <div className='name'>Ashleigh Schuldt</div>
            <div className='menu' id='menu'>
            <a href="#about">About</a>
            <a href="#knowledge">Knowledge</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
            </div>
        </div>
    )
}
}