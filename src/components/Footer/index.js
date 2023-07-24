import React from 'react'
import Logo from '../../assets/Logo.svg'
import { BsTwitter } from 'react-icons/bs';
import {SiLinkedin} from 'react-icons/si';
import { BsYoutube } from 'react-icons/bs';
import {FaFacebook} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logocontainer">
          <h2>Café Cesár</h2>
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube/>
          <FaFacebook />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Qualidade</span>
          <span>Ajuda</span>
          <span>Compartilhar</span>
          <span>Carreiras</span>
          <span>Depoimentos</span>
          <span>Trabalho</span>
        </div>
        <div className="footer-section-columns">
          <span>73 0000 0000</span>
          <span>etcetc@food.com</span>
          <span>etcetc@food.com</span>
          <span>contato@food.com</span>
        </div>
        <div className="footer-section-columns">
          <span>Termos e Condições</span>
          <span>Política de Privacidade</span>
        </div>
      </div>

    </div>
  )
}

export default Footer