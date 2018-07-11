import React from 'react';
import { Carousel } from 'react-bootstrap';
import DevCodeBar from '../assets/DevCodeBar.PNG';
import carloanapp from '../assets/carloanapp.PNG';
import lolhawaiian from '../assets/LOLHawaiian.PNG';
import '../styles/carousel.css';

export  default () => (
            <Carousel >
                <Carousel.Item onClick={() => {window.open('http://www.devcodebar.com')}}>
                   <img src={DevCodeBar} alt='devcodebar' />\
                   <div className='carousel-caption d-none d-md-block'>
                   <p> Click to go to the project. This is an assessment taking tool for Javascript!</p>
                   </div>
                </Carousel.Item>
                <Carousel.Item onClick={() => {window.open('https://car-loan-app.herokuapp.com/')}}>
                    <img src={ carloanapp } alt='carloanapp'/>
                    <div className='carousel-caption d-none d-md-block'>
                    <p> Click to go to the project. You can add different cars and calculate your payment based  on trade-in value or private sale!</p>
                    </div>
                </Carousel.Item>
                <Carousel.Item onClick={() => {window.open('https://github.com/LolHawaiianGrill/Lol-Hawaiian-Grill')}}>
                    <img  src={lolhawaiian} alt='LOLHawaiian'/>
                    <div className='carousel-caption d-none d-md-block'>
                    <p>This is a local restaurant's website I'm helping with. It's not live yet. Visit my GitHub repo for more details!</p>
                    </div>
                </Carousel.Item>
            </Carousel>
)
