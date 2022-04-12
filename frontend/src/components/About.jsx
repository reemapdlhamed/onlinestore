import React from "react";
import { NavLink, Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="container min-vh-100 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-primary fw-bold mb-4 py-0">About Us</h1>
            <p className="lead mb-4">
              We Are a Team in Iti-Mansoura , we develope this website to our
              graduation project <hr />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium, illum, laudantium eligendi odio cum expedita mollitia
              corporis totam distinctio esse vitae commodi culpa ipsa
              consequatur veritatis, reprehenderit eaque ipsam maxime!
            </p>
            <NavLink to="/contact" className="btn btn-outline-primary px-3">
              Contact Us
            </NavLink>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img
              src="/assets/images/about.png"
              alt="About Us"
              height="400px"
              width="400px"
            />
          </div>
        </div>
        <hr />
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                et reiciendis voluptatum, amet est natus quaerat ducimus
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                et reiciendis voluptatum, amet est natus quaerat ducimus
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                et reiciendis voluptatum, amet est natus quaerat ducimus
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                et reiciendis voluptatum, amet est natus quaerat ducimus
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                et reiciendis voluptatum, amet est natus quaerat ducimus
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                et reiciendis voluptatum, amet est natus quaerat ducimus
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div className="features" id="features">
          <h2 className="main-title">Team Features</h2>
          <div className="container">
            <div className="box quality">
              <div className="img-holder">
                <img src="/assets/features-01.jpg" alt="" />
              </div>
              <h2>Quality</h2>
              <p>
           strong quality assurance skills helps you deliver professional and accurate work for our business
              </p>
            </div>
            <div className="box time">
              <div className="img-holder">
                <img src="/assets/features-02.jpg" alt="" />
              </div>
              <h2>Time</h2>
              <p>
                Planning,Decision making and prioritization ,Setting boundaries
                and saying no ,Delegating and outsourcing task,Building a
                system and diligently following it
              </p>
            </div>
            <div className="box passion">
              <div className="img-holder">
                <img src="/assets/features-03.jpg" alt="" />
              </div>
              <h2>Passion</h2>
              <p>
 It is our primary instinct that we love a particular activity, and although it can be fueled by others, it has to arise out of our own inner desires. Skill is something you earn
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
