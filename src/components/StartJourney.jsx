import React from 'react'

const StartJourney = () => {
  return (
    <>
       <section className='mt-5' style={{ backgroundColor: "#28C0E7" }}>
                <div className="container">
                    <div className="row d-flex align-items-center justify-content-center text-white text-center text-md-start px-3">

                        {/* Right Section (Text & Button) - Shows first on all screens */}
                        <div className="col-12 col-md-6" style={{ backgroundImage: "url('public/img/circle.png')", padding: "80px" }}>
                            <h1 className="fw-bold" style={{ fontSize: "3rem" }}>
                                Start Your Journey <br />
                                With Us Now
                            </h1>
                        </div>

                        {/* Left Section (Paragraph & Button) - Always second */}
                        <div className="col-12 col-md-6">
                            <p className="mb-3">
                                Use this section to describe your company and the products you offer.
                                You could share your company’s story and details about why you are in business.
                            </p>
                            <button type="button" className="btn3 rounded-4 border-0 text-white px-5 py-3">
                                Let's Talk
                            </button>
                        </div>

                    </div>
                </div>
            </section>
    </>
  )
}

export default StartJourney
