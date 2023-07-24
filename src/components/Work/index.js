import React from 'react'
import PickMeals from "../../assets/pick-meals-image.png";
import ChooseMeals from "../../assets/choose-image.png";
import DeliveryMeals from "../../assets/delivery-image.png";

const Work = () => {

  const workInfoData = [
    {
      image: PickMeals,
      title: 'Lorem impsu',
      text: 'Lorem iptum interdum facilisi bibendum.'
    },
    {
      image: ChooseMeals,
      title: 'Lorem impsu',
      text: 'Lorem ipsum dolor sit amet consectetur. Maecenas orci et.'
    },
    {
      image: DeliveryMeals,
      title: 'Lorem impsu',
      text: 'Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum'
    },
    
  ]

  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Nossas Refências</p>
        <h1 className="primary-heading">Referências</h1>
        <p className="primary-text">Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.</p>
      </div>
      <div className="work-section-bottom">
        {
          workInfoData.map((data) => (
            <div className="work-section-info">
              <div className="info-boxes-img-container">
                <img src={data.image} alt="" />
              </div>
              <h2>{data.title}</h2>
              <p>{data.text}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Work