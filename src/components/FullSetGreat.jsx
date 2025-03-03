import React from 'react'

const FullSetGreat = () => {
  return (
    <>
      <section className="bg-black py-5">
        <div className="container">
          <div className="row align-items-center text-white text-md-start" style={{ minHeight: "250px" }}>

            {/* Left Section - Title */}
            <div className="col-12 text-center text-md-end col-md-6 mb-4 mb-md-0">
              <h1
                style={{
                  fontWeight: "700",
                  fontSize: "clamp(2rem, 5vw, 4rem)", // Dynamically adjusts from 2rem to 7rem
                  lineHeight: "1.2",
                }}
                className="fw-bold"
              >
                Full Set Of Great <br /> Materials To Make <br /> Your Product
              </h1>
            </div>


            {/* Right Section - Paragraph & Button */}
            <div className="col-12 col-md-6 d-flex flex-column align-items-center fs-4 align-items-md-start">
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

    </>
  )
}

export default FullSetGreat
