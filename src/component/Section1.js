import React, {Component} from 'react';
import { Container,Row,Col} from 'react-bootstrap';
class Section1 extends Component
{
   
    render(){
        return(
            <div id="section1">
            <Container >
              <Row>
                <Col xs="12" className="d-flex justify-content-md-start justify-content-center section1-logo">
                <img src="//v.fastcdn.co/u/e6c956c2/45008695-0-Logo.svg" alt="" />
                </Col>
              </Row>
            </Container>
            <Container>
              <Row>
                <Col xs="12" sm="5">
                  <Row>
                    <Col xs="11" sm="10" className="section1-column1">
                    <p >Instapage is more than a landing page builder—it’s an Advertising Conversion Cloud</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs="12" sm="10" className="section1-column2">
                    <p >Personalize a 1:1 ad-to-page post-click experience automatically for every visitor and boost your conversions by up to 400%</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs="12" className="section1-column3">
                    <div className="button1">
                                  <a href="" >REQUEST A DEMO</a>
                              </div>
                    </Col>
                  </Row>
                </Col>
                <Col xs="12" sm="7" className="section1-content-image" >
                <img src="//v.fastcdn.co/u/e6c956c2/45825025-0-GB--IB---Rares-Edit.svg" alt=""/>
                </Col>
      
              </Row>
            </Container>
      
          </div>
        );
    }
}

export default Section1;