import "./FooterStyles.css"
import React from 'react'
import { FaFacebook, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location"><FaHome size={20} style={{color:"white",marginRight:"2rem"}}/>
                <div><p>Chulliyil House</p>
                <p>Malappuram,kerala</p>
                    </div>
                    </div>
                    <div className="phone"><h4><FaPhone size={20} style={{color:"white",marginRight:"2rem"}}/>  6338270546</h4>
                    </div>
                    <div className="mail"><h4><FaMailBulk size={20} style={{color:"white",marginRight:"2rem"}}/>rahoofachulliyil@gmail.com</h4></div>
                    </div>

            
            <div className="right">
                <h4>About ME</h4>
                <p>I am Rahoofa Coming from Malappuram.</p>
                <div className="social">
                <a href="https://m.facebook.com/100009671735600/"><FaFacebook size={20} style={{color:"white",marginRight:"2rem"}}/></a>
               <a  href="https://m.facebook.com/100009671735600/"> <FaLinkedin size={20} style={{color:"white",marginRight:"2rem"}}/> </a> 
               <a  href="https://m.facebook.com/100009671735600/"><FaInstagram size={20} style={{color:"white",marginRight:"2rem"}}/></a></div>
            </div>
        </div>
        </div>

  )
}

export default Footer