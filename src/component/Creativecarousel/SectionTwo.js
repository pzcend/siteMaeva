import React, { Component } from "react";
import SplitText from "react-pose-text";
import "./style.scss";

const charPoses = {};

class SectionTwo extends Component {
  render() {
    return (
      <div className="section fp-section fp-tabble">
        <div className="slider_container">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="slider_content slider_content_two">
                  <h6>
                    <span className="br"></span>
                    <SplitText charPoses={charPoses}>Créatrice</SplitText>
                  </h6>
                  <h2>
                    <SplitText charPoses={charPoses}>
                      Maeva Lafon
                    </SplitText>
                  </h2>
                  <h2 className="bold">
                    <SplitText charPoses={charPoses}>KEY PROD</SplitText>
                  </h2>
                  <p>
                    Key Prod scénarise, conçoit, dessine et anime vos motions Design. 
                  </p>
                  <a href="#/" className="see_btn" data-text="Voir les Projets">
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
                    src={require("../../image/new-page/maeva.jpg")}
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

export default SectionTwo;
