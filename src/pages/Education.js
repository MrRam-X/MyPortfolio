import React from "react";

const Education = () => {
  return (
    <section id="education" className="education">
      <div className="section-heading text-center">
        <h2>Education</h2>
      </div>
      <div className="container">
        <div className="education-horizontal-timeline">
          <div className="row">
            <div className="col-sm-4">
              <div className="single-horizontal-timeline">
                <div className="experience-time">
                  <h2>2016 - 2020</h2>
                  <h3>
                    Bachelor <span>of </span> Technology (IT)
                  </h3>
                </div>
                <div className="timeline-horizontal-border">
                  <i className="fa fa-circle" aria-hidden="true"></i>
                  <span className="single-timeline-horizontal"></span>
                </div>
                <div className="timeline">
                  <div className="timeline-content">
                    <h4 className="title">
                      Bengal College of Engineering and Technology
                    </h4>
                    <h5>Durgapur, West Bengal, India</h5>
                    <p className="description">
                      Graduated with the Bachelor's degree in Information and
                      Technology
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="single-horizontal-timeline">
                <div className="experience-time">
                  <h2>2014 - 2016</h2>
                  <h3>Higher Secondary Education(P.C.M)</h3>
                </div>
                <div className="timeline-horizontal-border">
                  <i className="fa fa-circle" aria-hidden="true"></i>
                  <span className="single-timeline-horizontal"></span>
                </div>
                <div className="timeline">
                  <div className="timeline-content">
                    <h4 className="title">Maraikura Indramohan Vidyabhaban</h4>
                    <h5>Raiganj, West Bengal, India</h5>
                    <p className="description">
                      Completed my higher secondary education with Physics, Chemistry,
                      Mathematics and Computer Application as my subjects of
                      choice.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="single-horizontal-timeline">
                <div className="experience-time">
                  <h2>2013 - 2014</h2>
                  <h3>Secondary Education</h3>
                </div>
                <div className="timeline-horizontal-border">
                  <i className="fa fa-circle" aria-hidden="true"></i>
                  <span
                    className="single-timeline-horizontal spacial-horizontal-line"
                  ></span>
                </div>
                <div className="timeline">
                  <div className="timeline-content">
                    <h4 className="title">Raiganj Coronation High School</h4>
                    <h5>Raiganj, West Bengal, India</h5>
                    <p className="description">
                      Completed my secondary education with Bengali, English, Maths, Science, Geography and History
                    </p>
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

export default Education;
