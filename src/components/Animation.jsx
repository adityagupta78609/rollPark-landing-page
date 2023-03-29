import React from 'react'
import "./Animation.css"
const Animation = () => {

    

  return (
    <div className='anime-container flex-center' >
        <div className="outer-form flex-center">
        <div className="nav-form">

        <div className="head ">
            <span>logo</span>
            <div className="title">NEYMAN</div>
        </div>
        <div className="tail">
        <div className="head1 bot">Home</div>
        <div className="info-container home-container">
        home-container
        </div>
        <div className="head2 bot">Services</div>
        <div className="info-container services-container">
        services-container
        </div>
        <div className="head3 bot">About Us</div>
        <div className="info-container about-container">
        about-container
        </div>
        <div className="head4 bot"><span>Contact</span>
        <button>Login</button>
        </div>
        <div className="info-container contact-container">
        contact-container
        </div>
        </div>
    </div>
        </div>
    </div>
  )
}

export default Animation
