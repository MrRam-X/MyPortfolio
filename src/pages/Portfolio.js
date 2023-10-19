import React from "react";

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio-details">
        <div className="section-heading text-center">
          <h2>portfolio</h2>
        </div>
        <div className="container">
          <div className="portfolio-content">
            <div className="isotope">
              <div className="row">
                <div className="col-sm-4">
                  <div className="item">
                    <img
                      src="assets/images/portfolio/buktec.png"
                      alt="portfolio image"
                    />
                    <div className="isotope-overlay">
                      <a href="https://thebuktec.com/">Buktec pre-accounting platform</a>
                      {/* <p className="text-white">Organisation:- MAXIMESS</p> */}
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="item">
                    <img
                      src="assets/images/portfolio/jera.png"
                      alt="portfolio image"
                    />
                    <div className="isotope-overlay">
                      <a href="https://www.jera.co.jp/en">Digital Power Plant Managementt</a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="item">
                    <img
                      src="assets/images/portfolio/foodify.png"
                      alt="portfolio image"
                    />
                    <div className="isotope-overlay">
                      <a href="https://mrram-x.github.io/FoodifyApp/">Food Recipe App</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
