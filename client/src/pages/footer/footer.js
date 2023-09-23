import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <>
  {/* Footer */}
  <footer className="text-center text-lg-start bg-white text-muted " >
    {/* Section: Social media */}
    <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
      {/* Left */}
      <div className="me-5 d-none d-lg-block">
        <span>Get connected with us on social networks:</span>
      </div>
      {/* Left */}
      {/* Right */}
      <div>
       <Link to="" className="me-4 link-secondary">
          <i className="fab fa-facebook-f" />
        </Link>
       <Link to="" className="me-4 link-secondary">
          <i className="fab fa-twitter" />
        </Link>
       <Link to="" className="me-4 link-secondary">
          <i className="fab fa-google" />
        </Link>
       <Link to="" className="me-4 link-secondary">
          <i className="fab fa-instagram" />
        </Link>
       <Link to="" className="me-4 link-secondary">
          <i className="fab fa-linkedin" />
        </Link>
       <Link to="" className="me-4 link-secondary">
          <i className="fab fa-github" />
        </Link>
      </div>
      {/* Right */}
    </section>
    {/* Section: Social media */}
    {/* Section: Links  */}
    <section className="">
      <div className="container text-center text-md-start mt-5">
        {/* Grid row */}
        <div className="row mt-3">
          {/* Grid column */}
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            {/* Content */}
            <h6 className="text-uppercase fw-bold mb-4">
              <i className="fas fa-gem me-3 text-secondary" />
             YTSHOPINDIA
            </h6>
            <p>
              We help you to find best youtube channels to your growth
            </p>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            {/* Links */}
            <h6 className="text-uppercase fw-bold mb-4">Categories</h6>
            <p>
              Gaming
            </p>
            <p>
             Animations
            </p>
            <p>
              Vlogings
            </p>
            <p>
             Entertainment
            </p>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            {/* Links */}
            <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
            <p>
             <Link to="#!" className="text-reset">
                How to buy
              </Link>
            </p>
            <p>
             <Link to="#!" className="text-reset">
                How to sell
              </Link>
            </p>
            <p>
             <Link to="#!" className="text-reset">
                Buy
              </Link>
            </p>
            <p>
             <Link to="#!" className="text-reset">
                Sell
              </Link>
            </p>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            {/* Links */}
            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
            <p>
              <i className="fas fa-home me-3 text-secondary" /> New York, NY
              10012, US
            </p>
            <p>
              <i className="fas fa-envelope me-3 text-secondary" />
              info@example.com
            </p>
            <p>
              <i className="fas fa-phone me-3 text-secondary" /> + 01 234 567 88
            </p>
            <p>
              <i className="fas fa-print me-3 text-secondary" /> + 01 234 567 89
            </p>
          </div>
          {/* Grid column */}
        </div>
        {/* Grid row */}
      </div>
    </section>
    {/* Section: Links  */}
    {/* Copyright */}
    <div
      className="text-center p-4"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.025)" }}
    >
      © {new Date().getFullYear()} Copyright:
     <Link className="text-reset fw-bold" to="/">
        YTSHOPINDIA.in
      </Link>
    </div>
    {/* Copyright */}
  </footer>
  {/* Footer */}
</>

    </>
  )
}

export default Footer