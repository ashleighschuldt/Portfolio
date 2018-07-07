import React, {Component} from 'react';
import '../styles/header.css';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.svg';

export class Header extends Component {
    render(){
    return (
        <div className='header'>
            <div className='name'>Ashleigh Schuldt</div>
            <div className='links'>
            <img  onClick={() => {window.open('https://www.linkedin.com/in/ashleighschuldt/')}}src={linkedin} alt='linkedin'/>
            <img onClick={()=> {window.open('https://github.com/ashleighschuldt')}} src={github} alt='github'/>
            </div>
        </div>
    )
}
}