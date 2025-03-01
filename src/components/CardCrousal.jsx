import React, { useEffect, useRef, useState } from "react";

const CardCarousel = () => {
  const cards = [
    { id: 1, name: "Charles Patterson", img: "public/img/victor-1.png" },
    { id: 2, name: "Mike Johnson", img: "public/img/mike.png" },
    { id: 3, name: "Jasmin Doe", img: "public/img/jasmin.png" },
    { id: 4, name: "Alex Smith", img: "public/img/victor-1.png" },
    { id: 5, name: "Sarah Brown", img: "public/img/mike.png" },
    { id: 6, name: "Daniel White", img: "public/img/jasmin.png" },
    { id: 7, name: "Daniel White", img: "public/img/jasmin.png" },
    { id: 8, name: "Daniel White", img: "public/img/jasmin.png" },
    { id: 9, name: "Daniel White", img: "public/img/jasmin.png" },
  ];

  const [index, setIndex] = useState(0);
  const trackRef = useRef(null);
  const cardWidth = 320; // Card width including margin

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 1500);
    return () => clearInterval(interval);
  }, [cards.length]);

  useEffect(() => {
    if (trackRef.current) {
      trackRef.current.style.transition = "transform 0.6s ease-in-out";
      trackRef.current.style.transform = `translateX(-${index * cardWidth}px)`;
    }
  }, [index]);

  return (
    <section>
      <div className="container text-center mt-5">
        <h1 style={{ fontSize: "3.5rem", fontWeight: "700" }}>What Our Clients Say</h1>
        <p className="m-4">
          Create custom landing pages with Omega that convert more visitors than any website.
          With lots of unique blocks, you can easily build a page without coding.
        </p>
      </div>

      <div className="container mt-5 overflow-hidden" style={{ width: "960px" }}>
        <div className="d-flex" ref={trackRef} style={{ gap: "20px", display: "flex" }}>
          {cards.map((card) => (
            <div key={card.id} className="d-flex justify-content-center" style={{ flexShrink: 0 }}>
              <div
                className="card border-2 p-4 rounded-5"
                style={{ width: "300px", transition: "transform 0.3s ease-in-out" }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-10px)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
              >
                <div className="d-flex flex-column flex-md-row align-items-center text-center text-md-start">
                  <img src={card.img} alt="User" className="rounded-circle me-md-3 mb-3 mb-md-0" width="60" height="60" />
                  <div>
                    <h6 className="fw-semibold mb-0 fs-5">{card.name}</h6>
                    <p className="text-muted fs-5 mt-1">One Year With Us</p>
                  </div>
                </div>
                <p className="mt-3 text-muted" style={{ lineHeight: "1.8", fontSize: "20px" }}>
                  Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardCarousel;