import React from 'react'
// import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./Global.css"
const FormWithAcord = () => {
  return (
    <>

      <section className="container " style={{ marginTop: "2rem", marginBottom: "8rem" }} id="Contact" title="Contact">
        <div className="row d-flex align-items-center justify-content-center">
          {/* Left Side: Text & Form */}
          <div className="col-lg-6 col-md-12 text-center text-lg-start">
            <h2>How we can help you?</h2>
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
              <img src="public/img/arrow-return-right.svg" alt="" srcSet="" className=' bg-light-subtle' />
            </div>
          </div>

          {/* Right Side: Accordion */}
          <div className="col-lg-6 col-md-12 mt-4 mt-lg-0">
            <div className="accordion accordion-flush" id="accordionFlushExample">
              {[
                { id: "One", question: "How do I sign up for the project?" },
                { id: "Two", question: "What is the process for getting started?" },
                { id: "Three", question: "Are there any prerequisites?" },
              ].map((item, index) => (
                <div className="accordion-item" key={index}>
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed d-flex justify-content-between align-items-center"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#flush-collapse${item.id}`}
                      aria-expanded="false"
                      aria-controls={`flush-collapse${item.id}`}
                      style={{ display: "flex", justifyContent: "space-between", width: "100%" }}
                    >
                      {item.question}
                      <span className="icon" style={{ marginLeft: "auto", transition: "transform 0.3s" }}>
                        <i className="fa-solid fa-plus"></i>
                      </span>
                    </button>
                  </h2>
                  <div
                    id={`flush-collapse${item.id}`}
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      Placeholder content for this accordion, which is intended to demonstrate the
                      <code>.accordion-flush</code> class. This is the {index + 1} item's accordion body.
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default FormWithAcord
