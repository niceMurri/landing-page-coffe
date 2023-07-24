import React from 'react'

const Contact = () => {
  return (
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">Alguma dúvida?</h1>
      <h1 className="primary-heading">Deixe a gente te ajudar</h1>

      <div className="contact-form-container">
        <input type="text" placeholder="seuemail@gmail.com" />
        <button className="secondary-button" type="submit">Enviar</button>
      </div>
    </div>
  )
}

export default Contact