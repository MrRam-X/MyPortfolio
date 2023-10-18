import React from "react";
import { PortfolioData } from "../data/myPortfolioData";

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="skill-content">
        <div className="section-heading text-center">
          <h2>skills</h2>
        </div>
        <div className="container">
          <div className="row">
            {Object.values(PortfolioData.Skills).map((skillSet, idx) => {
              return (
                <div className="col-md-6" key={idx}>
                  <div className="single-skill-content">
                    {skillSet.map((skillItem, index) => {
                      return (
                        <div
                          className="barWrapper"
                          key={`${skillItem.id}_${index}`}
                        >
                          <span className="progressText">{skillItem.name}</span>
                          <div className="single-progress-txt">
                            <div className="progress ">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                aria-valuenow={skillItem.valueNow}
                                aria-valuemin={skillItem.valueMin}
                                aria-valuemax={skillItem.valueMax}
                                style={{ width: skillItem.width }}
                              ></div>
                            </div>
                            <h3>{skillItem.width}</h3>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
