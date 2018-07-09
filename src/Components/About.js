import React, {Component} from 'react';
import me from '../assets/me.jpg'
import '../styles/about.css';

export class About extends Component{
    render(){
        return(
        <div className='about'>
          <img src={me} alt='me'/>
        <h1>About Me</h1>
            <h4> I am a problem solver. I love being challenged and finding solutions.</h4>
            <p> I'm a self motivated team player with a can-do attitude.  I enjoy the challenges I face
                on each new project and the ability to continue learning each day. </p>
        </div>
        )}
}