// import React, { useEffect, useRef, useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

// const Next = () => {
//   const cards = [
//     { id: 1, name: "Charles Patterson", img: "public/img/victor-1.png" },
//     { id: 2, name: "Mike Johnson", img: "public/img/mike.png" },
//     { id: 3, name: "Jasmin Doe", img: "public/img/jasmin.png" },
//     { id: 4, name: "Alex Smith", img: "public/img/victor-1.png" },
//     { id: 5, name: "Sarah Brown", img: "public/img/mike.png" },
//     { id: 6, name: "Daniel White", img: "public/img/jasmin.png" },
//   ];

//   const trackRef = useRef(null);
//   const [isPaused, setIsPaused] = useState(false);

//   useEffect(() => {
//     if (!trackRef.current) return;

//     let scrollAmount = 2;
//     let scrollInterval;

//     const startScrolling = () => {
//       scrollInterval = setInterval(() => {
//         if (trackRef.current) {
//           trackRef.current.scrollLeft += scrollAmount;
//           if (
//             trackRef.current.scrollLeft >=
//             trackRef.current.scrollWidth / 2
//           ) {
//             trackRef.current.scrollLeft = 0;
//           }
//         }
//       }, 10);
//     };

//     if (!isPaused) startScrolling();

//     return () => clearInterval(scrollInterval);
//   }, [isPaused]);

//   return (
//     <section className="container-fluid text-center mt-5 position-relative">
//       <h1 style={{ fontSize: "3rem", fontWeight: "700" }}>Client Testimonials</h1>
//       <p className="m-4">See what our happy clients have to say.</p>

//       <div
//         className="carousel-container position-relative overflow-hidden"
//         onMouseEnter={() => setIsPaused(true)}
//         onMouseLeave={() => setIsPaused(false)}
//         style={{ display: "flex", justifyContent: "center", width: "100%", position: "relative" }}
//       >
//         <div
//           ref={trackRef}
//           className="d-flex"
//           style={{ overflowX: "hidden", whiteSpace: "nowrap", width: "100%", maskImage: "linear-gradient(to right, rgba(0,0,0,0.1), rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, rgba(0,0,0,0.1))" }}
//         >
//           {[...cards, ...cards].map((card, index) => (
//             <div
//               key={index}
//               className="card border-2 p-4 rounded-5 shadow mx-3"
//               style={{
//                 minWidth: "300px",
//                 flexShrink: 0,
//                 textAlign: "center",
//               }}
//             >
//               <img
//                 src={card.img}
//                 alt="User"
//                 className="rounded-circle mb-3"
//                 width="60"
//                 height="60"
//               />
//               <h6 className="fw-semibold fs-5">{card.name}</h6>
//               <p className="text-muted fs-6">One Year With Us</p>
//               <p className="mt-3 text-muted" style={{ lineHeight: "1.6", fontSize: "16px" }}>
//                 "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="d-flex justify-content-center mt-4">
//         <button onClick={() => trackRef.current.scrollLeft -= 300} className="btn btn-dark mx-2">❮</button>
//         <button onClick={() => trackRef.current.scrollLeft += 300} className="btn btn-dark mx-2">❯</button>
//       </div>
//     </section>
//   );
// };

// export default Next;
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Next = () => {
  const cards = [
    { id: 1, name: "Charles Patterson", img: "public/img/victor-1.png" },
    { id: 2, name: "Mike Johnson", img: "public/img/mike.png" },
    { id: 3, name: "Jasmin Doe", img: "public/img/jasmin.png" },
    { id: 4, name: "Alex Smith", img: "public/img/victor-1.png" },
    { id: 5, name: "Sarah Brown", img: "public/img/mike.png" },
    { id: 6, name: "Daniel White", img: "public/img/jasmin.png" },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [cards.length]);

  return (
    <section className="container-fluid text-center mt-5 d-block d-md-none position-relative">
      <h1 style={{ fontSize: "3rem", fontWeight: "700" }}>Dynamic Card Carousel</h1>
      <p className="m-4">Smooth transition with scaling effect.</p>

      <div
        className="d-flex justify-content-center align-items-center"
        style={{ position: "relative", height: "300px", overflow: "hidden" }}
      >
        {cards.map((card, i) => {
          const scale = i === index ? 1.2 : 0.8;
          const opacity = i === index ? 1 : 0.6;
          return (
            <div
              key={card.id}
              className="position-absolute text-center shadow rounded-4 p-3"
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
              <p className="text-muted fs-6">One Year With Us</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Next;

// <div>
//     <section>
//             <div className="container">
//                 <div className="text-center mt-5">
//                     <h1 style={{ fontSize: "3.5rem", fontWeight: "700" }}>What Our Clients Say</h1>
//                     <p className="m-4">
//                         Create custom landing pages with Omega that convert more visitors than any website. With lots of <br />
//                         unique blocks, you can easily build a page without coding.
//                     </p>
//                 </div>
            

//                 <div className="row mt-5 justify-content-center">
//                     {/* Card 1 */}
//                     <div className="col-12  col-md-6 col-lg-4 mb-4 d-flex justify-content-center">
//                         <motion.div initial={{ opacity: 1, y: 10 }}
//                             whileHover={{ opacity: 1, y: -10 }}
//                             transition={{ duration: 0.3, ease: "easeInOut" }} className="card  shadow-lg border-0 p-4 rounded-5">
//                             <div className="d-flex flex-column flex-md-row align-items-center text-center text-md-start">
//                                 <img src="public/img/victor-1.png" alt="User" className="rounded-circle me-md-3 mb-3 mb-md-0" width="60" height="60" />
//                                 <div>
//                                     <h6 className="fw-semibold mb-0 fs-5">Charles Patterson</h6>
//                                     <p className="text-muted fs-5 mt-1">One Year With Us</p>
//                                 </div>
//                                 <div className="ms-auto text-primary fs-1">
//                                     <span><img src="public/img/Vector.png" alt="" /></span>
//                                 </div>
//                             </div>
//                             <p className="mt-3 text-muted" style={{ lineHeight: "1.8", fontSize: "20px" }}>
//                                 consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
//                             </p>
//                         </motion.div>
//                     </div>

//                     {/* Card 2 */}
//                     <div className="col-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center">
//                         <motion.div initial={{ opacity: 1, y: 10 }}
//                             whileHover={{ opacity: 1, y: -10 }}
//                             transition={{ duration: 0.3, ease: "easeInOut" }} className="card  shadow-lg border-0 p-4 rounded-5">
//                             <div className="d-flex flex-column flex-md-row align-items-center text-center text-md-start">
//                                 <img src="public/img/mike.png  " alt="User" className="rounded-circle me-md-3 mb-3 mb-md-0" width="60" height="60" />
//                                 <div>
//                                     <h6 className="fw-semibold mb-0 fs-5">Charles Patterson</h6>
//                                     <p className="text-muted fs-5 mt-1">One Year With Us</p>
//                                 </div>
//                                 <div className="ms-auto text-primary fs-1">
//                                     <span className=''><img src="public/img/Vector.png" alt="" /></span>
//                                 </div>
//                             </div>
//                             <p className="mt-3 text-muted" style={{ lineHeight: "1.8", fontSize: "20px" }}>
//                                 consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
//                             </p>
//                         </motion.div>
//                     </div>

//                     <div className="col-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center">
//                         <motion.div initial={{ opacity: 1, y: 10 }}
//                             whileHover={{ opacity: 1, y: -10 }}
//                             transition={{ duration: 0.3, ease: "easeInOut" }} className="card  shadow-lg border-0 p-4 rounded-5">
//                             <div className="d-flex flex-column flex-md-row align-items-center text-center text-md-start">
//                                 <img src="public/img/jasmin.png" alt="User" className="rounded-circle me-md-3 mb-3 mb-md-0" width="60" height="60" />
//                                 <div>
//                                     <h6 className="fw-semibold mb-0 fs-5">Charles Patterson</h6>
//                                     <p className="text-muted fs-5 mt-1">One Year With Us</p>
//                                 </div>
//                                 <div className="ms-auto text-primary fs-1">
//                                     <span><img src="public/img/Vector.png" alt="" /></span>
//                                 </div>
//                             </div>
//                             <p className="mt-3 text-muted" style={{ lineHeight: "1.8", fontSize: "20px" }}>
//                                 consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
//                             </p>
//                         </motion.div>
//                     </div>
//                 </div>
//             </div>
//         </section> 
// </div>