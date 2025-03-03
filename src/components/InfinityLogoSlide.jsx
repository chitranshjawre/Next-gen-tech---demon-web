import React from 'react';

const InfinityLogoSlide = () => {
  return (
    <section className="company-section">
      <h2 className="text-black">Companies we work with</h2>
      <div className="logo-slider-wrapper mt-5">
        <div className="logo-gradient left"></div>
        <div className="logo-slider">
          <div className="logo-track">
            {[...Array(4)].map((_, i) => (
              <React.Fragment key={i}>
                <div className="logo-box">
                  <img src="/img/infinity 1.png" alt="Company Logo 1" className="logo-img" />
                </div>
                <div className="logo-box">
                  <img src="/img/infinity 2.png" alt="Company Logo 2" className="logo-img" />
                </div>
                <div className="logo-box">
                  <img src="/img/infinity 3.png" alt="Company Logo 3" className="logo-img" />
                </div>
                <div className="logo-box">
                  <img src="/img/infinity 4.png" alt="Company Logo 4" className="logo-img" />
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="logo-gradient right"></div>
      </div>
    </section>
  );
};

export default InfinityLogoSlide;
