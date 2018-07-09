import React from 'react';
import { Carousel } from 'react-bootstrap';
import DevCodeBar from '../assets/DevCodeBar.PNG';
import carloanapp from '../assets/carloanapp.PNG';
import lolhawaiian from '../assets/LOLHawaiian.PNG';
import '../styles/carousel.css';

export  default () => (
            <Carousel >
                <Carousel.Item onClick={() => {window.open('http://www.devcodebar.com')}}>
                   <img src={DevCodeBar} alt='devcodebar' />
                </Carousel.Item>
                <Carousel.Item onClick={() => {window.open('https://car-loan-app.herokuapp.com/')}}>
                    <img src={ carloanapp } alt='carloanapp'/>
                </Carousel.Item>
                <Carousel.Item>
                    <img  src={lolhawaiian} alt='LOLHawaiian'/>
                </Carousel.Item>
            </Carousel>
)
