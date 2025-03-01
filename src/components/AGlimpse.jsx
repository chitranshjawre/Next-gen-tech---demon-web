import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./Global.css"
const AGlimpse = () => {
  return (
    <>
      <section id="Blogs" title="Blogs">
                <div className="container">
                    <div className="text-center m-5">
                        <h2>A Glimpse Into Our Work</h2>
                        <p>Dive into the work we have churned out, that have both connected and converted.</p>
                    </div>

                    <div className="project row d-flex justify-content-center">

                        <div className="zoom-effect col-12 col-md-4 mb-4 d-flex justify-content-center">
                            <img src="public/img/project section.png" className="img-fluid" alt="Project" />
                        </div>
                        <div className="zoom-effect col-12 col-md-4 mb-4 d-flex justify-content-center">
                            <img src="public/img/project section.png" className="img-fluid" alt="Project" />
                        </div>
                        <div className="zoom-effect col-12 col-md-4 mb-4 d-flex justify-content-center">
                            <img src="public/img/project section.png" className="img-fluid" alt="Project" />
                        </div>
                    </div>
                </div>
            </section>

    </>
  )
}

export default AGlimpse
