import React, {Component} from 'react';
import '../styles/header.css';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.svg';
import pdf from '../assets/pdf.png'

export class Header extends Component {
    render(){
    return (
        <div className='header'>
            <div className='links'>
            <img onClick={() => {window.open('https://www.linkedin.com/in/ashleighschuldt/')}}src={linkedin} alt='linkedin'/>
            <img onClick={()=> {window.open('https://github.com/ashleighschuldt')}} src={github} alt='github'/>
            <div className='name'>Ashleigh Schuldt</div>
            </div>
            <div className='menu'>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            </div>
        </div>
    )
}
}