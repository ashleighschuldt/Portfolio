import React from 'react';
import { Carousel } from 'react-bootstrap';
import DevCodeBar from '../assets/DevCodeBar.PNG';
import carloanapp from '../assets/carloanapp.PNG';
import lolhawaiian from '../assets/LOLHawaiian.PNG';
import '../styles/carousel.css';

export  default () => (
            <Carousel >
                <Carousel.Item >
                    <a href="www.devcodebar.com" target='_blank'><img src={DevCodeBar} alt='devcodebar' /></a>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={ carloanapp } alt='carloanapp'/>
                </Carousel.Item>
                <Carousel.Item>
                    <img  src={lolhawaiian} alt='LOLHawaiian'/>
                </Carousel.Item>
            </Carousel>
)
