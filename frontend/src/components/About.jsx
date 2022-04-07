import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h1 className='text-primary fw-bold mb-4 py-2'>About Us</h1>
                     <p className="lead mb-4">  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus neque, rem voluptatibus ipsa tempora itaque quas beatae eum! Commodi quod consequuntur mollitia ipsam totam rerum perferendis exercitationem fugiat voluptates eveniet?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia exercitationem voluptates odit dolores deleniti voluptatem quo, cupiditate corrupti facilis consequuntur alias tempore eos, pariatur at temporibus dignissimos ab! Consectetur, minima!
                        </p>
                        <NavLink to="/contact" className="btn btn-outline-primary px-3"
                        >Contact Us</NavLink>              
                </div>
                <div className="col-md-6 d-flex justify-content-center">
                        <img src="/assets/about.jpg" alt="about us" 
                        height="400px" />
                    </div>
            </div>
        </div>
    </div>
  )
}

export default About