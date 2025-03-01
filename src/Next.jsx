import React from 'react'

const Next = () => {
  return (
    <div>
          
      <section>
                <div className="container">
                    <div className="text-center mt-5">
                        <h1 style={{ fontSize: "3.5rem", fontWeight: "700" }}>What Our Clients Say</h1>
                        <p className="m-4">
                            Create custom landing pages with Omega that convert more visitors than any website. With lots of <br />
                            unique blocks, you can easily build a page without coding.
                        </p>
                    </div>
                

                    <div className="row mt-5 justify-content-center">
                        {/* Card 1 */}
                        <div className="col-12  col-md-6 col-lg-4 mb-4 d-flex justify-content-center">
                            <motion.div initial={{ opacity: 1, y: 10 }}
                                whileHover={{ opacity: 1, y: -10 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }} className="card  shadow-lg border-0 p-4 rounded-5">
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
                            </motion.div>
                        </div>

                        {/* Card 2 */}
                        <div className="col-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center">
                            <motion.div initial={{ opacity: 1, y: 10 }}
                                whileHover={{ opacity: 1, y: -10 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }} className="card  shadow-lg border-0 p-4 rounded-5">
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
                            </motion.div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center">
                            <motion.div initial={{ opacity: 1, y: 10 }}
                                whileHover={{ opacity: 1, y: -10 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }} className="card  shadow-lg border-0 p-4 rounded-5">
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
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section> 
    </div>
  )
}

export default Next
