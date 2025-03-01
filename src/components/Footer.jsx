import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./Global.css"


const Footer = () => {
  return (
    <>
      <footer className="bg-black h-50 text-white py-5">
        <div className="container ">
          <div className="row">

            {/* Logo & Newsletter */}
            <div className="col-md-4">
              <h3 className="text-white">
                <img src="public/img/Logo (2).png" alt="" srcSet="" />
              </h3>

              <p className=" mt-3">
                Follow our newsletter. We will regularly  update our latest projects and availability.
              </p>
            </div>

            {/* Quick Links */}
            <div className="col-md-2 my-3">
              <h5 className="text-white">QUICK LINKS</h5>
              <ul className="list-unstyled text-white lh-lg">
                <li>Quick Links</li>
                <li>Quick Links</li>
                <li>Quick Links</li>
              </ul>
            </div>
              
            {/* Our Services */}
            <div className="col-md-3 my-3">
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
            <div className="col-md-3 my-3">
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

export default Footer;
