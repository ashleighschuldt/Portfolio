import React, {Component} from 'react';
import '../styles/projects.css';
import Carousel from './Carousel';

export class Projects extends Component{
    render(){
        return(
        <div className='projects'>
        <h1 id='projects'>Projects</h1>
        <Carousel />
        </div>
        )}
}