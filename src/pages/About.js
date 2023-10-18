import React from "react";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="section-heading text-center">
        <h2>about me</h2>
      </div>
      <div className="container">
        <div className="about-content">
          <div className="row">
            <div className="col-sm-6">
              <div className="single-about-txt">
                <h3>
                  Experienced Web and Mobile App Developer Crafting Innovative
                  Solutions for Seamless User Experiences. Expert in Front-End
                  development and Cross-Platform Development. Passionate about
                  Transforming Ideas into High-Performing Digital Solutions.
                  Let's Create the Future of Technology Together!{" "}
                </h3>
                <p>
                  With 2.5+ years of hands-on experience in crafting exceptional
                  digital experiences, I specialize in creating responsive,
                  user-centric interfaces with a keen eye for design aesthetics.
                  I've successfully collaborated on numerous projects,
                  delivering clean, maintainable code that enhances
                  functionality and performance. My commitment to staying
                  current with industry trends allows me to adapt swiftly,
                  ensuring optimal user experiences. Looking forward to
                  leveraging my skills and passion to help shape the digital
                  landscape for the better.
                </p>
                <div className="row">
                  <div className="col-sm-4">
                    <div className="single-about-add-info">
                      <h3>Phone</h3>
                      <p>6290338636</p>
                    </div>
                  </div>
                  <div className="col-sm-8">
                    <div className="single-about-add-info">
                      <h3>Email</h3>
                      <p>ramprasadbaidya21@gmail.com</p>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="single-about-add-info">
                      <h3>Address</h3>
                      <p>
                        Maraikura, South Kasba, Debinagar, Raiganj, Uttar
                        Dinajpur, West Bengal, India, 733123
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-offset-1 col-sm-5">
              <div className="single-about-img">
                <img
                  src="assets/images/about/port6.jpg"
                  alt="profile_image"
                  style={{
                    height: "500px",
                    width: "510px",
                    objectFit: "cover",
                  }}
                />
                <div className="about-list-icon">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-dribbble" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-instagram" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
