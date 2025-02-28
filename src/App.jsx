import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./Global.css"
import './App.css'
import { FaBars, FaTimes } from "react-icons/fa";

function App() {

 const [isMobileOpen, setIsMobileOpen] = useState(false);
  return (
    <>
  
       {/* Main Navbar */}
            <nav className="navbar fixed-top navbar-expand-lg shadow bg-body-tertiary">
              <div className="container px-0">
                {/* Logo */}
                <a href="#" className="navbar-brand">
                  <img src="/img/Logo (1).png" className="Mainlogo p-1" alt="Logo" />
                </a>
      
                {/* Mobile Menu Button */}
                <button className="navbar-toggler border-0 d-lg-none" onClick={() => setIsMobileOpen(true)}>
                  <FaBars size={24} />
                </button>
      
                {/* Desktop Navbar */}
                <div className="collapse navbar-collapse justify-content-center d-none d-lg-flex">
                  <ul className="navbar-nav text-center fw-bold fs-6">
                    <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
                    <li className="nav-item"><a className="nav-link" href="#Service">Our Work</a></li>
                    <li className="nav-item"><a className="nav-link" href="#Blogs">Blog</a></li>
                    <li className="nav-item"><a className="nav-link" href="#About">About</a></li>
                    <li className="nav-item"><a className="nav-link" href="#Contact">Contact</a></li>
                  </ul>
                </div>
      
                {/* Desktop Get in Touch Button */}
                <button type="button" className=" btn1  text-white d-none d-lg-block px-5 py-3">
                  Get in Touch
                </button>
              </div>
            </nav>
      
            {/* Mobile Sidebar Menu */}
            <div className={`mobile-menu ${isMobileOpen ? "open" : ""} d-lg-none`}>
              <div className="menu-content">
                {/* Close Button */}
                <button className="close-btn" onClick={() => setIsMobileOpen(false)}>
                  <FaTimes size={24} />
                </button>
      
                {/* Navbar Links */}
                <ul className="nav flex-column  fw-bold fs-6">
                  <li className="nav-item"><a className="nav-link" href="#" onClick={() => setIsMobileOpen(false)}>Home</a></li><hr />
                  <li className="nav-item"><a className="nav-link" href="#Service" onClick={() => setIsMobileOpen(false)}>Our Work</a></li><hr />
                  <li className="nav-item"><a className="nav-link" href="#Blogs" onClick={() => setIsMobileOpen(false)}>Blog</a></li><hr />
                  <li className="nav-item"><a className="nav-link" href="#About" onClick={() => setIsMobileOpen(false)}>About</a></li><hr />
                  <li className="nav-item"><a className="nav-link" href="#Contact" onClick={() => setIsMobileOpen(false)}>Contact</a></li><hr />
      
                  {/* Get in Touch Button (Mobile Only) */}
                  <li className="nav-item  mt-3">
                    <button type="button" className="w-100 rounded-3 text-white" style={{ backgroundColor: "#28C0E7",border:"none" }}>
                      Get in Touch
                    </button>
                  </li>
                </ul>
              </div>
            </div>
      
            {/* Overlay (Closes menu when clicking outside) */}
            {isMobileOpen && <div className="overlay d-lg-none" onClick={() => setIsMobileOpen(false)}></div>}
      
            {/* CSS Styling */}
            <style jsx>{`
              .mobile-menu {
                position: fixed;
                top: 0;
                right: -100%;
                width: 250px;
                height: 100vh;
                background: #fff;
                box-shadow: -4px 0 10px rgba(0, 0, 0, 0.2);
                transition: right 0.3s ease-in-out;
                z-index: 1050;
              }
              .mobile-menu.open {
                right: 0;
              }
              .menu-content {
                padding: 20px;
              }
              .close-btn {
                border: none;
                background: transparent;
                display: block;
                margin-left: auto;
                margin-bottom: 10px;
              }
              .overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100vh;
                background: rgba(0, 0, 0, 0.5);
                z-index: 1049;
              }
            `}</style>


      <section className=" " style={{marginTop:"10rem"}}>


        <div className="container  d-flex flex-column  flex-md-row justify-content-center align-items-center overflow-hidden position-relative text-center">

          {/* Left Floating Polygon Image */}
          <img
            src="public/img/Polygon-hero-right.svg (1).png"
            className="smallicon position-absolute top-0 start-0 d-none d-md-block"
            alt="Polygon Hero Right"
          />

          {/* Hero Content */}
          <div className="hero d-flex flex-column justify-content-center align-items-center text-center position-relative px-3">

            <h1 className="fw-bold heading1 display-4 display-md-3 ">
              <i className=''>Let’s Bring Your</i> <br />
              <span className="heading text-primary">
                <img src="public/img/Ideas to life.png" className="img-fluid" alt="Ideas to Life" />
              </span>
            </h1>

            <p className="mt-3 lead">
              With every single one of our clients, we bring forth a deep <br className="d-none d-md-block" />
              passion for creative problem solving — which is what we deliver.
            </p>

            <button type="button" className=" btn2 text-white rounded-lg mt-3  py-4">
              Get in Touch
            </button>

            {/* Right Floating Polygon Image */}
            <img
              src="public/img/Polygon hero - left.png"
              className="position-absolute bottom-0 end-0 img-fluid d-none d-md-block"
              alt="Polygon Hero Left"
            />
          </div>
        </div>

      </section>



      <section className="company-section ">
        <h6 className='text-black'>Companies we work with</h6>

        <div className="logo-container">
          <div className="logo-box">
            <img src="public/img/infinity 1.png" alt="Company Logo 1" />

          </div>

          <div className="logo-box">
            <img src="public/img/infinity 2.png" alt="Company Logo 2" />

          </div>

          <div className="logo-box">
            <img src="public/img/infinity 3.png" alt="Company Logo 3" />

          </div>

          <div className="logo-box">
            <img src="public/img/infinity 4.png" alt="Company Logo 4" />

          </div>
          <div className="logo-box">
            <img src="public/img/infinity 1.png" alt="Company Logo 1" />

          </div>

          <div className="logo-box">
            <img src="public/img/infinity 2.png" alt="Company Logo 2" />

          </div>

          <div className="logo-box">
            <img src="public/img/infinity 3.png" alt="Company Logo 3" />

          </div>

          <div className="logo-box">
            <img src="public/img/infinity 4.png" alt="Company Logo 4" />

          </div>
          <div className="logo-box">
            <img src="public/img/infinity 1.png" alt="Company Logo 1" />

          </div>

          <div className="logo-box">
            <img src="public/img/infinity 2.png" alt="Company Logo 2" />

          </div>

          <div className="logo-box">
            <img src="public/img/infinity 3.png" alt="Company Logo 3" />

          </div>

          <div className="logo-box">
            <img src="public/img/infinity 4.png" alt="Company Logo 4" />

          </div>
        </div>
      </section>


      <section className='' id="Service" title="Service">
        <div className="container-fluid  mt-4">
          <div className="container   text-center" >
            <h1>Our Services</h1>
            <p className=' mt-3'>We provide customized solutions that meet our clients' unique needs <br />
              and help them succeed in an increasingly digital world.</p>
          </div>
          <div className="container-fluid mt-3">
            <div className="row gy-3 justify-content-center">

              {/* Card 1: Digital Products */}
              <div className="col-lg-3 col-md-6 col-sm-12 d-flex">
                <div className="card border-2 rounded-5 p-3  d-flex flex-column align-items-center text-center">
                  <div className="card-body">
                    <h2 className="card-title fw-bold">Digital Products</h2>
                    <p className="card-text">
                      Est tempora at. Aut quo molestias cupiditate et fugiat.
                      Accusantium dicta ut voluptatem. Natus sit in.
                    </p>
                  </div>
                  <div className="image-container">
                    <img src="public/img/Digital.png" className="img-fluid zoom-effect" alt="Digital Products" />
                  </div>
                </div>
              </div>

              {/* Card 2: Mobile Apps */}
              <div className="col-lg-3 col-md-6 col-sm-12 d-flex">
                <div className="card border-2 rounded-5 p-3  d-flex flex-column align-items-center text-center">
                  <div className="card-body">
                    <h2 className="card-title fw-bold">Mobile Apps</h2>
                    <p className="card-text">
                      Est tempora at. Aut quo molestias cupiditate et fugiat.
                      Accusantium dicta ut voluptatem. Natus sit in.
                    </p>
                  </div>
                  <div className="image-container">
                    <img src="public/img/mobile.png" className="img-fluid zoom-effect" alt="Mobile Apps" />
                  </div>
                </div>
              </div>

              {/* Card 3: UI/UX Design */}
              <div className="col-lg-3 col-md-6 col-sm-12 d-flex">
                <div className="card border-2 rounded-5 p-3  d-flex flex-column align-items-center text-center">
                  <div className="card-body">
                    <h2 className="card-title fw-bold">UI/UX Design</h2>
                    <p className="card-text">
                      Est tempora at. Aut quo molestias cupiditate et fugiat.
                      Accusantium dicta ut voluptatem. Natus sit in.
                    </p>
                  </div>
                  <div className="image-container">
                    <img src="public/img/uiux.png" className="img-fluid zoom-effect" alt="UI/UX Design" />
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      <section id="About" title="About">
        <div className="container mt-5">
          <section>
            <div className="container mt-5">
              <div className="row gy-4 justify-content-center align-items-stretch">

                {/* Left Column - IT Consulting */}
                <div className="col-lg-5 col-md-6 col-12 d-flex">
                  <div className="service-box1 p-4 shadow  w-100 d-flex flex-column"style={{backgroundColor:"#abdbe3"}}>
                    <h2>IT Consulting</h2>
                    <p>
                      Est tempora at. Aut quo molestias cupiditate et fugiat. <br />
                      Accusantium dicta ut voluptatem. Natus sit in.
                    </p>

                    {/* Form Box */}
                    <div className="d-flex flex-column align-items-center mt-auto">
                      <div className="bg-white border border-gray-300 shadow-md rounded p-4 w-100" style={{ maxWidth: "400px" }}>

                        {/* Text Area */}
                        <textarea
                          className="form-control rounded-xl p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                          rows="2"
                          placeholder="A monthly review report for a SaaS business"
                        ></textarea>

                        {/* Progress Bar */}
                        <div className="progress mt-3" style={{ height: "3px" }}>
                          <div className="progress-bar bg-primary" style={{ width: "60%" }}></div>
                        </div>

                        {/* Button */}
                        <button className="btn btn-primary w-100 mt-3 d-flex align-items-center justify-content-center gap-2">
                          <img src="/public/img/star.png" alt="Star Icon" className="img-fluid" style={{ width: "20px", height: "20px" }} />
                          <span>Start with AI</span>
                        </button>

                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Digital Marketing */}
                <div className="col-lg-7 col-md-6 col-12 d-flex">
                  <div className="service-box1 p-4 shadow  w-100 d-flex flex-column" >
                    <h2>Digital Marketing</h2>
                    <p>
                      Est tempora at. Aut quo molestias cupiditate et fugiat. <br />
                      Accusantium dicta ut voluptatem. Natus sit in.
                    </p>
                    <div className="mt-auto">
                      <img src="public/img/list2.png" alt="Digital Marketing" className="img-fluid w-100" />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

        </div>
      </section>


      <section id="Blogs" title="Blogs">
        <div className="container">
          <div className="text-center m-5">
            <h2>A Glimpse Into Our Work</h2>
            <p>Dive into the work we have churned out, that have both connected and converted.</p>
          </div>

          <div className="project row d-flex justify-content-center">
            <div className="col-12 col-md-4 mb-4 d-flex justify-content-center">
              <div className="zoom-effect">
                <img src="public/img/project section.png" className="img-fluid" alt="Project" />
              </div>
            </div>
            <div className="col-12 col-md-4 mb-4 d-flex justify-content-center">
              <div className="zoom-effect">
                <img src="public/img/project section.png" className="img-fluid" alt="Project" />
              </div>
            </div>
            <div className="col-12 col-md-4 mb-4 d-flex justify-content-center">
              <div className="zoom-effect">
                <img src="public/img/project section.png" className="img-fluid" alt="Project" />
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="bg-black py-5">
  <div className="container">
    <div className="row align-items-center text-white text-md-start" style={{ minHeight: "250px" }}>
      
      {/* Left Section - Title */}
      <div className="col-12 text-center text-md-end col-md-6 mb-4 mb-md-0">
        <h1 style={{ fontWeight: "700", fontSize: "2.5rem" }}>
          Full Set Of Great <br /> Materials To Make <br /> Your Product
        </h1>
      </div>

      {/* Right Section - Paragraph & Button */}
      <div className="col-12 col-md-6 d-flex flex-column align-items-center align-items-md-start">
        <p className="mb-4 text-center text-md-start" style={{ color: "#ABAFC7" }}>
          consetetur sadipscing elitr, sed diam nonumy eirmod <br />
          tempor invidunt ut labore et dolore magna <br />
          aliquyam erat, sed diam voluptua.
        </p>
        <button type="button" className="btn-info3 border px-4 py-2">
          Get Started
        </button>
      </div>

    </div>
  </div>
</section>



      <section>
        <div className="container">
          <div className="text-center mt-5">
            <h1 style={{ fontSize: "3.5rem", fontWeight: "700" }}>What Our Clients Say</h1>
            <p className="m-4">
              Create custom landing pages with Omega that convert more visitors than any website. With lots of <br />
              unique blocks, you can easily build a page without coding.
            </p>
          </div>
          public/img/mike.png

          <div className="row mt-5 justify-content-center">
            {/* Card 1 */}
            <div className="col-12  col-md-6 col-lg-4 mb-4 d-flex justify-content-center">
              <div className="card  shadow-lg border-0 p-4 rounded-5">
                <div className="d-flex flex-column flex-md-row align-items-center text-center text-md-start">
                  <img src="public/img/victor-1.png" alt="User" className="rounded-circle me-md-3 mb-3 mb-md-0" width="60" height="60" />
                  <div>
                    <h6 className="fw-semibold mb-0 fs-5">Charles Patterson</h6>
                    <p className="text-muted fs-5 mt-1">One Year With Us</p>
                  </div>
                  <div className="ms-auto text-primary fs-1">
                    <span><img src="public/img/Vector.png" alt="" /></span>
                  </div>
                </div>
                <p className="mt-3 text-muted" style={{ lineHeight: "1.8", fontSize: "20px" }}>
                  consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center">
              <div className="card  shadow-lg border-0 p-4 rounded-5">
                <div className="d-flex flex-column flex-md-row align-items-center text-center text-md-start">
                  <img src="public/img/mike.png  " alt="User" className="rounded-circle me-md-3 mb-3 mb-md-0" width="60" height="60" />
                  <div>
                    <h6 className="fw-semibold mb-0 fs-5">Charles Patterson</h6>
                    <p className="text-muted fs-5 mt-1">One Year With Us</p>
                  </div>
                  <div className="ms-auto text-primary fs-1">
                    <span className=''><img src="public/img/Vector.png" alt="" /></span>
                  </div>
                </div>
                <p className="mt-3 text-muted" style={{ lineHeight: "1.8", fontSize: "20px" }}>
                  consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center">
              <div className="card  shadow-lg border-0 p-4 rounded-5">
                <div className="d-flex flex-column flex-md-row align-items-center text-center text-md-start">
                  <img src="public/img/jasmin.png" alt="User" className="rounded-circle me-md-3 mb-3 mb-md-0" width="60" height="60" />
                  <div>
                    <h6 className="fw-semibold mb-0 fs-5">Charles Patterson</h6>
                    <p className="text-muted fs-5 mt-1">One Year With Us</p>
                  </div>
                  <div className="ms-auto text-primary fs-1">
                    <span><img src="public/img/Vector.png" alt="" /></span>
                  </div>
                </div>
                <p className="mt-3 text-muted" style={{ lineHeight: "1.8", fontSize: "20px" }}>
                  consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className='mt-5' style={{ backgroundColor: "#28C0E7" }}>
        <div className="container ">
          <div className="row d-flex align-items-center  justify-content-center text-white text-center text-md-start px-3" >

            {/* Right Section (Text & Button) - Shows first on small screens */}
            <div className="col-12 col-md-6 order-2 order-md-1"style={{ backgroundImage: "url('public/img/circle.png')",padding:"80px"}}>
              <h1 className="fw-bold" style={{ fontSize: "3rem" }}>
                Start Your Journey <br />
                With Us Now
              </h1>
            </div>

            {/* Left Section (Paragraph & Button) - Shows second on small screens */}
            <div className="col-12 col-md-6 order-1 order-md-2">
              <p className="mb-3">
                Use this section to describe your company and the products you offer.
                You could share your company’s story and details about why you are in business.
              </p>
              <button type="button" className=" btn3 rounded-4 border-0 text-white px-5 py-3">
                Let's Talk
              </button>
            </div>

          </div>
        </div>
      </section>





      <section className="container my-5" id="Contact" title="Contact">
        <div className="row d-flex align-items-center justify-content-center">
          {/* Left Side: Text & Form */}
          <div className="col-lg-6 col-md-12 text-center text-lg-start">
            <h3>How we can help you?</h3>
            <p className="mt-3 mb-4">
              Follow our newsletter. We will regularly <br /> update our latest
              project and availability.
            </p>

            {/* Input & Button */}
            <div className="d-flex flex-column flex-sm-row align-items-center">
              <input
                type="text"
                placeholder="Enter Your Email"
                className="form-control px-3 py-3 rounded-4 mb-2 mb-sm-0"
                style={{ maxWidth: "300px" }}
              />
              <button
                type="button"
                className="btn text-white rounded-4 px-4 py-3 ms-sm-2"
                style={{ backgroundColor: "#28C0E7" }}
              >
                Let's Talk
              </button>
            </div>

            {/* Image */}
            <div className="mt-3">
              <img
                src="public/img/more FAQ.png"
                alt="More FAQ"
                className="img-fluid"
                style={{ maxWidth: "100%", height: "auto" }}
              />
              <img src="public/img/arrow-return-right.svg" alt="" srcset="" className=' bg-light-subtle' />
            </div>
          </div>

          {/* Right Side: Accordion */}
          <div className="col-lg-6 col-md-12 mt-4 mt-lg-0">
            <div className="accordion accordion-flush" id="accordionFlushExample">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    How do I sign up for the project?
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    Placeholder content for this accordion, which is intended to
                    demonstrate the <code>.accordion-flush</code> class. This is
                    the first item's accordion body.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    How do I sign up for the project?
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    Placeholder content for this accordion, which is intended to
                    demonstrate the <code>.accordion-flush</code> class. This is
                    the second item's accordion body.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    How do I sign up for the project?
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    Placeholder content for this accordion, which is intended to
                    demonstrate the <code>.accordion-flush</code> class. This is
                    the third item's accordion body.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>








      <footer className="bg-black h-50 text-white py-5">
        <div className="container ">
          <div className="row">

            {/* Logo & Newsletter */}
            <div className="col-md-4">
              <h3 className="text-white">
                <img src="public/img/Logo (2).png" alt="" srcset="" />
              </h3>

              <p className=" mt-3">
                Follow our newsletter. We will regularly  update our latest projects and availability.
              </p>
            </div>

            {/* Quick Links */}
            <div className="col-md-2">
              <h5 className="text-white">QUICK LINKS</h5>
              <ul className="list-unstyled text-white lh-lg">
                <li>Quick Links</li>
                <li>Quick Links</li>
                <li>Quick Links</li>
              </ul>
            </div>

            {/* Our Services */}
            <div className="col-md-3">
              <h5 className="text-white">OUR SERVICES</h5>
              <ul className="list-unstyled  text-white lh-lg">
                <li>Web Development</li>
                <li>Digital Marketing</li>
                <li>App Development</li>
                <li>IT Consulting</li>
                <li>UI/UX Designing</li>
              </ul>
            </div>

            {/* Contact Us */}
            <div className="col-md-3">
              <h5 className="text-white">CONTACT US</h5>
              <p className="text-white ">
                <strong style={{ color: "#28C0E7" }}>Address:</strong> 207A Radhika Premier, Tulsi Nagar, Indore, India
              </p>
              <p className="">
                <strong style={{ color: "#28C0E7" }}>Email Id:</strong> contact@ngtsindore.com
              </p>
              <p className="">
                <strong style={{ color: "#28C0E7" }}>Phone:</strong> +91 62683 00438
              </p>
            </div>

          </div>
        </div>
      </footer>
          {/* {footer side size accordion to figma} */}
      <footer>
        <div className="container-fluid d-flex justify-content-between p-4">
          <div className="">
            <p>  Terms of use | Privacy Environmental Policy</p>
          </div>
          <div className="">Copyright © 2024 Company . All Rights Reserved.</div>
        </div>
      </footer>

















    </>
  )
}

export default App
