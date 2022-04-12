import React from 'react'
import { NavLink ,Link} from 'react-router-dom'

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
                <div className="testimonials" id="testimonials">
      <h2 className="main-title">Our Team Members</h2>
      <div className="container">
        <div className="box">
          <img src="/assets/avatar-01.png" alt="" />
          <h3>Abdelrhman Zaki</h3>
          <span className="title">Full Stack Developer</span>
          <div className="rate">
            <i className="filled fas fa-star"></i>
            <i className="filled fas fa-star"></i>
            <i className="filled fas fa-star"></i>
            <i className="filled fas fa-star"></i>
            <i className="far fa-star"></i>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus
            quaerat ducimus
          </p>
        </div>
        <div className="box">
          <img src="/assets/avatar-02.png" alt="" />
          <h3>Adel Elfar</h3>
          <span className="title">Full Stack Developer</span>
          <div className="rate">
            <i className="filled fas fa-star"></i>
            <i className="filled fas fa-star"></i>
            <i className="filled fas fa-star"></i>
            <i className="filled fas fa-star"></i>
            <i className="far fa-star"></i>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus
            quaerat ducimus
          </p>
        </div>
        <div className="box">
          <img src="/assets/avatar-04.png" alt="" />
          <h3>Hassan Osama</h3>
          <span className="title">Full Stack Developer</span>
          <div className="rate">
            <i className="filled fas fa-star"></i>
            <i className="filled fas fa-star"></i>
            <i className="filled fas fa-star"></i>
            <i className="filled fas fa-star"></i>
            <i className="far fa-star"></i>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus
            quaerat ducimus
          </p>
        </div>
        <div className="box">
          <img src="/assets/avatar-03.png" alt="" />
          <h3>Amed ElManzlawy</h3>
          <span className="title">Full Stack Developer</span>
          <div className="rate">
            <i className="filled fas fa-star"></i>
            <i className="filled fas fa-star"></i>
            <i className="filled fas fa-star"></i>
            <i className="filled fas fa-star"></i>
            <i className="far fa-star"></i>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus
            quaerat ducimus
          </p>
        </div>
        <div className="box">
          <img src="/assets/avatar-05.png" alt="" />
          <h3>Ahmed Kamal</h3>
          <span className="title">Full Stack Developer</span>
          <div className="rate">
            <i className="filled fas fa-star"></i>
            <i className="filled fas fa-star"></i>
            <i className="filled fas fa-star"></i>
            <i className="filled fas fa-star"></i>
            <i className="far fa-star"></i>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus
            quaerat ducimus
          </p>
        </div>
        <div className="box">
          <img src="/assets/avatar-06.png" alt="" />
          <h3>Reem Abdelhamid</h3>
          <span className="title">Full Stack Developer</span>
          <div className="rate">
            <i className="filled fas fa-star"></i>
            <i className="filled fas fa-star"></i>
            <i className="filled fas fa-star"></i>
            <i className="filled fas fa-star"></i>
            <i className="far fa-star"></i>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus
            quaerat ducimus
          </p>
        </div>
      </div>
    </div>
    <div className="features" id="features">
      <h2 className="main-title">Features</h2>
      <div className="container">
        <div className="box quality">
          <div className="img-holder"><img src="/assets/features-01.jpg" alt="" /></div>
          <h2>Quality</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi minima</p>
        </div>
        <div className="box time">
          <div className="img-holder"><img src="/assets/features-02.jpg" alt="" /></div>
          <h2>Time</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi minima</p>
        </div>
        <div className="box passion">
          <div className="img-holder"><img src="/assets/features-03.jpg" alt="" /></div>
          <h2>Passion</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi minima</p>
        </div>
      </div>
    </div>
            </div>
    </div>
    )
}

export default About
