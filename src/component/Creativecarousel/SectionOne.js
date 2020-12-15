import React, { Component } from "react";
import SplitText from "react-pose-text";
const charPoses = {};

class SectionOne extends Component {
  render() {
    return (
      <div className="section fp-section fp-tabble section_one">
        <div className="slider_container">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="slider_content">
                  <h6>
                    <span className="br"></span>
                    <SplitText charPoses={charPoses}>Motion Design</SplitText>
                  </h6>
                  <h2>
                    <SplitText charPoses={charPoses}>
                      Une valeur ajoutée.
                    </SplitText>
                  </h2>
                  <p>
                    Le motion Design est un outil très efficace pour promouvoir votre entreprise ou votre activité.
                  </p>
                  <a href="#/" className="see_btn" data-text="See Projects">
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
                    src={require("../../image/new-page/slider_img1.jpg")}
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

export default SectionOne;
