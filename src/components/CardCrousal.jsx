import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Carousel = () => {
  const cards = [
    { id: 1, name: "Charles Patterson", img: "./img/victor-1.png" },
    { id: 2, name: "Mike Johnson", img: "./img/mike.png" },
    { id: 3, name: "Jasmin Doe", img: "./img/jasmin.png" },
    { id: 4, name: "Alex Smith", img: "./img/victor-1.png" },
    { id: 5, name: "Sarah Brown", img: "./img/mike.png" },
    { id: 6, name: "Daniel White", img: "./img/jasmin.png" },
  ];

  const trackRef = useRef(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [index, setIndex] = useState(0);

  // Detect screen size
  useEffect(() => {
    const updateScreenSize = () => setIsSmallScreen(window.innerWidth < 768);
    updateScreenSize(); // Initialize on mount
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  // Auto-scroll effect for large screens
  useEffect(() => {
    if (isSmallScreen || !trackRef.current) return;

    let scrollAmount = 2;
    let scrollInterval;

    const startScrolling = () => {
      scrollInterval = setInterval(() => {
        if (trackRef.current) {
          trackRef.current.scrollLeft += scrollAmount;
          if (trackRef.current.scrollLeft >= trackRef.current.scrollWidth / 2) {
            trackRef.current.scrollLeft = 0; // Reset scroll
          }
        }
      }, 10);
    };

    if (!isPaused) startScrolling();
    return () => clearInterval(scrollInterval);
  }, [isPaused, isSmallScreen]);

  // Auto-slide effect for small screens
  useEffect(() => {
    if (!isSmallScreen) return;

    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [isSmallScreen]);

  return (
    <section className="container-fluid text-center mt-5 position-relative">

      <div className="container align-items-center ">
        <h2 className=" ">What Our Clients Says</h2>
        <p>Create custom landing pages with Omega that convert more visitors than any website. With lots of <br />
        unique blocks, you can easily build a page without coding.</p>
      </div>

      
      {/* Linear Carousel for Large Screens */}
      {!isSmallScreen && (
        <div
          className="carousel-container mt-5 position-relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          style={{ display: "flex", justifyContent: "center", width: "100%" }}
        >
          <div
            ref={trackRef}
            className="d-flex"
            style={{
              overflowX: "hidden",
              whiteSpace: "nowrap",
              width: "100%",
              maskImage: "linear-gradient(to right, rgba(0,0,0,0.1), rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, rgba(0,0,0,0.1))",
            }}
          >
            {[...cards, ...cards].map((card, index) => (
              <div
                key={index}
                className="card border-2 p-4 rounded-5 shadow mx-3"
                style={{ minWidth: "300px", flexShrink: 0, textAlign: "center" }}
              >
                <div className="d-flex justify-content-between align-items-center">
                  <img
                    src={card.img}
                    alt="User"
                    className="rounded-circle mb-3"
                    width="60"
                    height="60"
                  />
                  <div>
                    <h6 className="fw-semibold fs-5">{card.name}</h6>
                    <p className="text-muted fs-6">One Year With Us</p>
                  </div>
                  <img src="./img/Vector.png" alt="icon" />
                </div>
                <p className="mt-3 text-muted" style={{ lineHeight: "1.6", fontSize: "16px" }}>
                  consetetur sadipscing elitr, sed diam <br />
                  nonumy eirmod tempor invidunt ut <br />
                  labore et dolore magna aliquyam <br />
                  erat, sed diam voluptua. <br />
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Non-Linear Carousel for Small Screens */}
      {isSmallScreen && (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ position: "relative", height: "300px" }}
        >
          {cards.map((card, i) => {
            const scale = i === index ? 1.2 : 0.8;
            const opacity = i === index ? 1 : 0.6;
            return (
              <div
                key={card.id}
                className="position-absolute shadow rounded-4 p-3"
                style={{
                  transform: `translateX(${(i - index) * 250}px) scale(${scale})`,
                  transition: "all 0.5s ease-in-out",
                  opacity,
                  width: "220px",
                  background: "white",
                  zIndex: i === index ? 10 : 1,
                }}
              >
                <img
                  src={card.img}
                  alt="User"
                  className="rounded-circle mb-3"
                  width="60"
                  height="60"
                />
                <h6 className="fw-semibold fs-5">{card.name}</h6>
                <p className="fs-6">One Year With Us</p>
                <p style={{ textAlign: "center", fontSize: "14px", marginTop: "10px" }}>
                consetetur sadipscing elitr, sed diam <br />
                  nonumy eirmod tempor invidunt ut <br />
                  labore et dolore magna aliquyam <br />
                  erat, sed diam voluptua. <br />
                </p>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default Carousel;
