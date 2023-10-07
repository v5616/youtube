import React from 'react'
import "./style.css"
import { Container } from 'react-bootstrap'
const Contact = () => {
  return (
 <>
     
        <Container>
        <section className="newsection">
    <div className="section-header">
      <div >
        <h2>Contact Us</h2>
       
      </div>
    </div>
  
      <div className='d-md-flex justify-content-around pt-4 mb-5'>
        <div className="contact-info col-lg-3 col-md-3 col-sm-12">
          <div className="contact-info-item">
            <div className="contact-info-icon">
              <i className="fas fa-home" />
            </div>
            <div className="contact-info-content">
              <h4>Address</h4>
              <p>
                4671 Sugar Camp Road,
                <br /> Owatonna, Minnesota, <br />
                55060
              </p>
            </div>
          </div>
          <div className="contact-info-item">
            <div className="contact-info-icon">
              <i className="fas fa-phone" />
            </div>
            <div className="contact-info-content">
              <h4>Phone</h4>
              <p>571-457-2321</p>
            </div>
          </div>
          <div className="contact-info-item">
            <div className="contact-info-icon">
              <i className="fas fa-envelope" />
            </div>
            <div className="contact-info-content">
              <h4>Email</h4>
              <p>ntamerrwael@mfano.ga</p>
            </div>
          </div>
        </div>
        <div className="contact-form p-4 col-lg-7 col-md-7 col-sm-12 m-0 p-0">
          <form action="" >
            <h2>Send Message</h2>
            <div className="input-box">
              <input type="text" required="true" name="" />
              <span>Full Name</span>
            </div>
            <div className="input-box">
              <input type="email" required="true" name="" />
              <span>Email</span>
            </div>
            <div className="input-box">
              <textarea required="true" name="" defaultValue={""} />
              <span>Type your Message...</span>
            </div>
            <div className="input-box">
              <input type="submit" defaultValue="Send" name="" />
            </div>
          </form>
        </div>
      </div>
  </section>
        </Container>
  


 </>
  )
}

export default Contact