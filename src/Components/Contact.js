import React, {Component} from 'react';
import '../styles/contact.css';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.svg';
import email from '../assets/Email.png';

export class Contact extends Component{
    render(){
        return(
        <div className='contact'>
        <h1 id='contact'>Contact Me</h1>
        <div className='links'>
            <img src={email} alt='email'/>
            <img onClick={()=> {window.open('https://github.com/ashleighschuldt')}} src={github} alt='github'/>
            <img onClick={() => {window.open('https://www.linkedin.com/in/ashleighschuldt/')}}src={linkedin} alt='linkedin'/>
            <div className='email'>ashleigh.schuldt@gmail.com</div>
        </div>
        </div>
        )}
}