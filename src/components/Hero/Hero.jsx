import React from 'react';

import images from '../constants';
import './Hero.css';


export default function Hero() {
  return (
    <div className='app_hero section_padding'>
        <div className="app_hero-top">
           <p className="p_montserrat">Igniting a Revolution in <span>HR Innovation</span></p> 
        </div>
        
        <div className="app__hero-wrapper flex_center">
            <div className="app_hero-wrapper_info">
                <div className="head_bulb">
                    <img src={images.bulb}/>
                    <h1 className="headtext" style={{display: 'flex'}}>
                        getlinked Tech
                    </h1>
                </div>
                
                <h1 className="headtext" style={{display: 'flex'}}>
                    Hackathon <span style={{marginLeft: '1rem'}}>1.0</span>
                    <img src={images.chain}/>
                    <img src={images.fire}/>
                </h1>
                <p className="p_montserrat">
                    Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize
                </p>
                <button className="custom_button">Register</button>

                <h1 className="timer">00<span>H</span> 00<span>M</span> 00<span>S</span> </h1>
            </div>
            <div className="app_hero-wrapper_img">
                
                <img src={images.glow} alt="" />
                <div className="man_gradient">
                    <img src={images.lens} alt="gradient-top" />
                </div>
            </div>
        </div>
        
        <div className="absolute_gradient">
            <img src={images.lens} alt="gradient-top" />
        </div>
        <div className="absolute_star">
            <img src={images.star} alt="gradient-top" />
        </div>
        <div className="absolute_star2">
            <img src={images.prestar} alt="gradient-top" />
        </div>
        <div className="absolute_star3">
            <img src={images.prestar} alt="gradient-top" />
        </div>
    </div>
  )
}
