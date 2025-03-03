import React from 'react'

const InfinityLogoSlide = () => {
  return (
    <>
      <section className="company-section">
                <h2 className="text-black">Companies we work with</h2>

                <div className="logo-slider mt-4">
                    <div className="logo-track ">
                        {/* Logos Repeated Twice for Seamless Effect */}
                        {[...Array(4)].map((_, i) => (
                            <React.Fragment key={i}>
                                <div className="logo-box me-2" >
                                    <img src="/img/infinity 1.png" style={{height:"48px", width:"194px"}} alt="Company Logo 1" />
                                </div>
                                <div className="logo-box">
                                    <img src="/img/infinity 2.png" style={{height:"48px", width:"194px"}} alt="Company Logo 2" />
                                </div>
                                <div className="logo-box">
                                    <img src="/img/infinity 3.png" style={{height:"48px", width:"194px"}} alt="Company Logo 3" />
                                </div>
                                <div className="logo-box">
                                    <img src="/img/infinity 4.png" style={{height:"48px", width:"194px"}} alt="Company Logo 4" />
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </section>

    </>
  )
}

export default InfinityLogoSlide
