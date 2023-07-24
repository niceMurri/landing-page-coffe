import React from 'react'

import ProfilePic from '../../assets/murilo.jpg';
import {AiFillStar} from 'react-icons/ai'

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testemunha</p>
        <h1 className="primary-heading" style={{textAlign: 'center'}}>O que estão falando sobre nossa empresa?</h1>
        <p className="primary-text">Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.</p>
      </div>

      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
        Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <p>Murilo</p>
      </div>
    </div>
  )
}

export default Testimonial