import React from 'react'
import aboutBackground from '../../assets/about-background.png'
import aboutBackgroundImage from '../../assets/cafe-img.webp'
import { BsFillPlayCircleFill } from 'react-icons/bs'

const About = () => {
  return (
    <>
      <div className="about-section-container">
        <div className="about-background-image-container">
          <img src={aboutBackground} alt="" />
        </div>
        <div className="about-section-image-container">
          <img src={aboutBackgroundImage} alt="" />
        </div>
        <div className="about-section-text-container">
          <p className="primary-subheading">Sobre</p>
          <h1 className="primary-heading">Lorem ipsum dolor sit amet consectetur. Non tincidunt magna </h1>
          <p className="primary-text">Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.</p>
          <p className="primary-text">Non tincidunt magna non et elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.</p>
          <div className="about-buttons-container">
            <button className="secondary-button">Saiba mais</button>
            <button className="watch-video-button"><BsFillPlayCircleFill /> Assistir</button>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default About;
