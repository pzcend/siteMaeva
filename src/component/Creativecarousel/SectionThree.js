import React, { Component } from "react";
import SplitText from "react-pose-text";
import "./style.scss";

const charPoses = {};
class SectionThree extends Component {
  render() {
    return (
      <div className="section fp-section fp-tabble section_one">
        <div className="slider_container">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="slider_content slider_content_three">
                  <h6>
                    <span className="br"></span>
                    <SplitText charPoses={charPoses}>Construisons ensemble votre Projet</SplitText>
                  </h6>
                  <h2>
                    <SplitText charPoses={charPoses}>
                      Confiez moi votre idée....
                    </SplitText>
                  </h2>
                  <p>
                    Texte de présentation d'un projet de Motion Design
                  </p>
                  <a href="#/" className="see_btn" data-text="Réalisations">
                    Voir mes réalisations
                    <span className="arrow">
                      <span className="line"></span>
                    </span>
                  </a>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="slider_image_inner">
                  <span></span>
                  <img
                    src={require("../../image/new-page/rocket-3122690_640.png")}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SectionThree;
