import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import DevCodeBar from '../assets/DevCodeBar.PNG';
import carloanapp from '../assets/carloanapp.PNG';
import lolhawaiian from '../assets/LOLHawaiian.PNG';
import '../styles/carousel.css';

export  default () => (
            <Carousel >
                <div className='carousel'>
                    <img src={DevCodeBar} alt='devcodebar'/>
                </div>
                <div className='carousel'>
                    <img src={ carloanapp } alt='carloanapp'/>
                </div>
                <div className='carousel' >
                    <img  src={lolhawaiian} alt='LOLHawaiian'/>
                </div>
            </Carousel>
)
