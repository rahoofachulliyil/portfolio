import "./HeroImgStyles.css";
import React from 'react'
import Intro from "../assets/b1.jpg"
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
        <img className="into-img" src={Intro} alt="A1"/> 
        </div>
        <div className="content">
            <h5>HI, IAM RAHOOFA</h5>
            <h1>Software Engineer</h1>
            <div>
            <Link to="/Project" className="btn">projects</Link>
            <Link to="/Contact" className="btn-light">Contact</Link>
          </div>
     </div>
    
    </div>
  )
}

export default HeroImg