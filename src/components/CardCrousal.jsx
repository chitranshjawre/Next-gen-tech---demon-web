import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";

function CardCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 1500, 
    slidesToShow: 3, 
    slidesToScroll: 1, 
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 750,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const cards = [
    { id: 1, name: "Charles Patterson", img: "/img/victor-1.png" },
    { id: 2, name: "Mike Johnson", img: "/img/mike.png" },
    { id: 3, name: "Jasmin Doe", img: "/img/jasmin.png" },
    { id: 4, name: "Alex Smith", img: "/img/victor-1.png" },
    { id: 5, name: "Sarah Brown", img: "/img/mike.png" },
    { id: 6, name: "Daniel White", img: "/img/jasmin.png" },
  ];

  return (
    <div className="container-fluid mt-4">
      {/* Heading Section */}
      <div className="text-center mb-5 px-3">
        <h2 className="fw-bold">What Our Clients Say</h2>
        <p className="text-muted">
          Create custom landing pages with Omega that convert more visitors than any website. 
          With lots of unique blocks, you can easily build a page without coding.
        </p>
      </div>

      {/* Slider Section */}
      <div className="px-md-4 px-2 overflow-hidden">
        <Slider {...settings}>
          {cards.map((card) => (
            <div key={card.id} className="px-1">
              <div className="card border-0 shadow rounded-4 p-4 w-100 h-100">
                <div className="d-flex align-items-center justify-content-between w-100">
                  {/* Profile Image */}
                  <img
                    src={card.img}
                    alt={card.name}
                    className="rounded-circle"
                    width="80"
                    height="80"
                  />

                  {/* Name & Info */}
                  <div className="text-start flex-grow-1 ms-3">
                    <h5 className="fw-bold mb-1">{card.name}</h5>
                    <p className="text-muted mb-0">One Year With Us</p>
                  </div>

                  {/* Icon */}
                  <img src="/img/Vector.png" alt="icon" width="30" height="30" />
                </div>

                {/* Card Description */}
                <p className="text-start mt-3 text-muted">
                  Consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                  invidunt ut labore et dolore magna aliquyam erat, sed diam
                  voluptua.
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default CardCarousel;
