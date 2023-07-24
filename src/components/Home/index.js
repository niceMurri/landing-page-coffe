import React from 'react'
import Navbar from '../Navbar'

//images
import BannerBackground from '../../assets/home-banner-background.png'
import BannerImage from '../../assets/cafe-img.webp'
import {FiArrowRight} from 'react-icons/fi'

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground}></img>
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            O melhor café da cidade, agora perto de você!
          </h1>
          <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
          </p>
          <button className="secondary-button">
            Pedir
            <FiArrowRight />
          </button>
        </div>
        <div className="home-image-container">
          <img src={BannerImage}></img>
        </div>
      </div>
    </div>
  )
}

export default Home