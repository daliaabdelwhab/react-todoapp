import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./AboutMe.css";
import AboutImg from "../assets/photography woman.jpg"
import { Link } from "react-router-dom";


function AboutMe() {
  return (
    <div id="about" className="About ">
      <section className="h-100 container">
              <h2 >About Me</h2> 

        <div className=" text-center text-dark w-100 h-100  d-flex justify-content-center align-items-center p-5 gap-4">
                <h2 >About Me</h2>  
                 <img className="about-img" src={AboutImg} alt=""/>
          <div className="d-flex  flex-column justify-content-center align-items-start gap-2 ">
            <p className="lead text-justify ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              recusandae qui alias eligendi voluptatum. Officia veritatis
              aspernatur iste, amet omnis iusto? Alias odit suscipit cupiditate
              quis vero autem repudiandae aspernatur? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Libero recusandae qui alias eligendi
              voluptatum. Officia veritatis aspernatur iste, amet omnis iusto?
              Alias odit suscipit cupiditate quis vero autem repudiandae
              aspernatur?
            </p>
           <Link to="/"className="btn"  text="Download Resume" >Download Resume</Link> 
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutMe;
