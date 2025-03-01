import React from 'react'

const ItDigital = () => {
  return (
    <>
       <section id="About" title="About">
                <div className="container mt-5">
                    <section>
                        <div className="container mt-5">
                            <div className="row gy-4 justify-content-center align-items-stretch">

                                {/* Left Column - IT Consulting */}
                                <div className="col-lg-5 col-md-6 col-12 d-flex">
                                    <div className="service-box1 p-4 shadow  w-100 d-flex flex-column" style={{ backgroundColor: "#abdbe3" }}>
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

    </>
  )
}

export default ItDigital
