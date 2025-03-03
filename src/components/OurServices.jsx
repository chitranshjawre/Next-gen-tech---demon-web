import React from 'react'

const OurServices = () => {
    return (
        <>
            <section className='' id="Service" title="Service">
                <div className="container-fluid  mt-4">
                    <div className="container   text-center" >
                        <h2>Our Services</h2>
                        <p className=' mt-3'>We provide customized solutions that meet our clients' unique needs <br />
                            and help them succeed in an increasingly digital world.</p>
                    </div>
                    <div className="container  mt-5">
                        <div className="row g-4 justify-content-evenly 
                        ">


                            {/* Card 1: Digital Products */}
                            <div className="col-lg-4 col-md-6 col-sm-12 d-flex">
                                <div className="card border-2 rounded-5 d-flex flex-column align-items-center text-center position-relative custom-hover-card">
                                    <div className="card-body">
                                        <h2 className="card-title fw-bold">Digital Products</h2>
                                        <p className="card-text">
                                            Est tempora at. Aut quo molestias cupiditate et <br /> fugiat.
                                            Accusantium dicta ut voluptatem. Natus sit in.
                                        </p>
                                    </div>
                                    <div className=" Glimpse-1 image-container">
                                        <img src="/img/Digital.png" className="img-fluid" alt="Digital Products" />
                                    </div>
                                </div>
                            </div>

                            {/* public/img/pitch.png */}
                            {/* Card 2: Mobile Apps */}

                            <div className="col-lg-4  col-md-6 col-sm-12 d-flex">
                                <div className="card border-2 rounded-5   d-flex flex-column align-items-center text-center">
                                    <div className="card-body">
                                        <h2 className="card-title fw-bold">Mobile Apps</h2>
                                        <p className="card-text">
                                            Est tempora at. Aut quo molestias cupiditate et <br /> fugiat.
                                            Accusantium dicta ut voluptatem. Natus sit in.
                                        </p>
                                    </div>
                                    <div className=" image-container" >
                                    <div class="rotate-circle text-center align-content-center text-white"> <h2 className='mb-5'>pitch</h2></div>


                                    </div>
                                </div>
                            </div>

                            {/* Card 3: UI/UX Design */}
                            <div className="col-lg-4  col-md-6 col-sm-12 d-flex">
                                <div className="card border-2 rounded-5   d-flex flex-column align-items-center text-center">
                                    <div className="card-body">
                                        <h2 className="card-title fw-bold">UI/UX Designing</h2>
                                        <p className="card-text">
                                            Est tempora at. Aut quo molestias cupiditate et <br /> fugiat.
                                            Accusantium dicta ut voluptatem. Natus sit in.
                                        </p>
                                    </div>
                                    <div className="  image-container">
                                        <img src="/img/uiux.png" className="img-fluid " alt="Digital Products" />
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

export default OurServices
