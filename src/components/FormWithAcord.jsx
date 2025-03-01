import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./Global.css"
const FormWithAcord = () => {
  return (
    <>
      
      <section className="container " style={{ marginTop: "8rem", marginBottom: "8rem" }} id="Contact" title="Contact">
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
                            <img src="public/img/arrow-return-right.svg" alt="" srcSet="" className=' bg-light-subtle' />
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
    </>
  )
}

export default FormWithAcord
