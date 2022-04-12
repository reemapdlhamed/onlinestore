import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
    return (
        
        <div>
            <div className="container min-vh-100 my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="text-primary fw-bold mb-4 py-0">About Us</h1>
                        <p className="lead mb-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo molestiae earum rem doloremque, nihil delectus ullam error consectetur? Dicta, non exercitationem in consectetur totam dolorum at voluptate laudantium aliquam, officiis perspiciatis molestias reiciendis consequuntur ullam perferendis velit blanditiis distinctio assumenda a maxime reprehenderit atque. Nam eius rerum distinctio, a illo earum, optio molestias nostrum maxime quibusdam delectus, adipisci impedit? Nam corporis reiciendis minus quod eaque, laborum veritatis voluptatibus id maiores tempore accusantium recusandae perspiciatis, officia cum 
                        </p>
                        <NavLink to="/contact" className="btn btn-outline-primary px-3">Contact Us</NavLink>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src="/assets/images/about.png" alt="About Us" height="400px" width="400px" />
                    </div>
                </div>
            </div>
            <div className="our-work-process">
  <div className="container">
    <div className="row">
      <div className="col-12">
        <h2>Our Services Process</h2>
      </div>
      <div className="col-6 col-lg-3">
        <div className="step-box">
          <span className="step-number">1</span>
          <div className="step-icon">
          <i className="fas fa-adn"></i>
          </div>
          <label>Book Your Order</label>
        </div>
      </div>

      <div className="col-6 col-lg-3">
        <div className="step-box">
          <span className="step-number">2</span>
          <div className="step-icon"><i className="fas fa-archive" aria-hidden="true"></i></div>
          <label>put it in The Cart</label>
        </div>
      </div>

      <div className="col-6 col-lg-3">
        <div className="step-box">
          <span className="step-number">3</span>
          <div className="step-icon"><i className="fas fa-truck" aria-hidden="true"></i></div>
          <label>Payment</label>
        </div>
      </div>

      <div className="col-6 col-lg-3">
        <div className="step-box">
          <span className="step-number">4</span>
          <div className="step-icon"><i className="fas fa-thumbs-o-up" aria-hidden="true"></i></div>
          <label>Deliver Your Things</label>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
    )
}

export default About
