import React, {Component} from 'react';
import '../styles/knowledge.css';
import reactLogo  from '../assets/react.svg';
import javascript from '../assets/javascript.svg';
import node from '../assets/node.svg';
import html from '../assets/html.svg';
import css from '../assets/css.svg';
import mocha from '../assets/mocha.svg';
import mongodb from '../assets/mongoDB.svg';
import postgresql from '../assets/postgresql.svg';
import sass from '../assets/sass.svg';
import git from '../assets/git.svg';
import github from '../assets/github-word.svg';
import heroku from '../assets/heroku.svg';




export class Knowledge extends Component{
    render(){
        return(
            <div className='knowledge'>
            <h1>Skill Set</h1>
            <div className='skills'>
                <img src={ reactLogo } alt='react'/>
                <img src={ javascript } alt='js'/>
                <img src={ node } alt='node.js'/>
                <img src={ html } alt='html'/>
                <img src={ css } alt='css'/>
                <img src= { mocha } alt='mocha'/>
                <img src= { postgresql } alt='postgresql'/>
                <img src= { mongodb } alt='mongodb'/>
                <img src= {heroku } alt='heroku'/>
                <img src= { sass } alt='sass'/>
                <img src= { git } alt='git'/>
                <img src= { github } alt='github'/>
                </div>
                <p> In addition to these skills, I have an understanding of Agile/Scrum and Waterfall methodologies and how they play a role in developing a product.
                    I also have experience with REST and HTTP.</p>
            </div>
    )}
}