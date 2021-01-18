import React from 'react'
import aboutus from "./images/aboutus.png"
import { NavLink } from 'react-router-dom'


const About = () =>
<>
<section id="aboutus" className="d-flex align-items-center">
  <div className="container-fluid">
    <div className="row">
      <div className="col-12 mx-auto">
      <div className="row mt-5">
        <div className="col-md-12 order-2 order-lg-1 d-flex justify-content-center flex-column">
        <h1 className="underline">Über Uns</h1>
          <h2>
          Die <strong className="brand-name">Web Solution</strong> GmbH
          </h2>
          <h3 className="my-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus nam eos quis natus quas consequatur modi a autem cumque tempore animi fuga sint provident laboriosam ullam, laudantium ipsa doloremque id facilis beatae, voluptatem vero. Consequuntur natus quasi, similique consequatur alias odit recusandae unde, maiores, praesentium quas dicta veniam eveniet debitis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, pariatur.
          </h3>
          <div className="mt-3 text-center">
            <NavLink to="" className="btn-get-started">
              Get Started
            </NavLink>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</section>  
</>



export default About