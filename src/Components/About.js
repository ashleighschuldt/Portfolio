import React, {Component} from 'react';
import me from '../assets/me.jpg'
import '../styles/about.css';

export class About extends Component{
    render(){
        return(
        <div className='about'>
          <img src={me} alt='me'/>
        <h1>About Me</h1>
            <h4> I am a problem solver. I love being challenged and finding reusable solutions.</h4>
            <p> I'm a self motivated team player with a can-do attitude.  I enjoy the challenges faced
                on each new project and the ability to continue learning each day. This is what I find so exciting about development. I enjoy seeing
                a project through to completion. It's exciting making things -- especially things that are useful to other people. I enjoy solving complex problems
                and feel fulfilled and gain a sense of accomplishment once complete. </p>
            <p> Besides coding, I enjoy camping, fishing, playing video games and cars. These are my go-to for unwinding and recharging so I can get back to solving problems.</p>
        </div>
        )}
}