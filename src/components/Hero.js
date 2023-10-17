import "./Hero.css";
import React from 'react';
import IntroImg from "../assets/pexels-pixabay-268533.jpg"
import { Link } from "react-router-dom";

const Hero = () => {
  return (
      <div className="hero">
          <div className="mask">
              <img className="into-img" src={IntroImg} alt=""/>
              
          </div>
          <div className="content">
              <p>Hello I'm </p>
              <h1>Dalia Abdelwhab</h1>
              <p>Front End Developer</p>
              <div>
                  <Link to="/Project"
                      className="btn">Project</Link>
                  <Link to="/Contact"
                      className="btn1">Contact</Link>
              </div>
          </div>

      
    </div>
  )
}

export default Hero;
