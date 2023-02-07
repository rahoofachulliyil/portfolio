import React from 'react'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import Navbar from '../components/Navbar'
import Resume from '../components/Resume'

const About = () => {
  return (
    <div><Navbar/>
    <HeroImg2 heading="ABOUT" text="Hi , Iam Rahoofa.." />
    <Resume/>
   <Footer/>
  </div>
  )
}

export default About