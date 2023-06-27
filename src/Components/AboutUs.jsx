import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const AboutUs = () => {
  function toggleText() {
      
    // Get all the elements from the page
    var points = 
        document.getElementById("points");
  
    var showMoreText =
        document.getElementById("moreText");
  
    var buttonText =
        document.getElementById("textButton");

    if (points.style.display === "none") {
  

        showMoreText.style.display = "none";
  
        points.style.display = "inline";
        buttonText.innerHTML = "Show More";
    }
  

    else {
     
        showMoreText.style.display = "inline";
  
      
        points.style.display = "none";
        buttonText.innerHTML = "Show Less";
    }
}
  
  return (
    <div className="aboutUs">
      <Container>
        <Row>
          <Col md={6} className="aboutUs-col">
          <img src="https://static.wixstatic.com/media/bd3e5f_7a27851e86ab47bfb4fce4d5791ba857~mv2.png/v1/crop/x_0,y_34,w_5496,h_3398/fill/w_456,h_281,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/%CE%93%CE%BD%CF%89%CF%81%CE%B9%CF%83%CF%84%CE%B5-%CF%84%CE%B7%CE%BD-Yves-Rocher.png" alt="" />
          </Col>
          <Col md={6} className="aboutUs-col">
            <p className="headline">NOUS NE FAISONS PAS DE COMPROMIS</p>
            <p className="text">
              Nous contribuons à rendre notre planète plus belle, à réduire
              notre empreinte tout en maintenant réserves physiques.
              <span id="points">...</span>
            </p>
            <button onclick="toggleText()" id="textButton" className="btn">show more</button>
       
  
        <p className="text" id="moreText"> This necessity was
            as personal to me as it was universal.
            This need combined with my passion for
            teaching resulted in GeeksforGeeks as
            we know today. My message to you, in
            our inaugural edition of Geeks Digest,
            would be that if you are looking for
            a problem to work on, you don’t need
            to look very far for it. All you should
            do is to look around yourself.
        </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutUs;
