import React,{Component} from 'react';
import {Container,Row,Col} from 'react-bootstrap';
 class Section3 extends Component
 {
     render(){
         return(
            <section id="section3">
            <Container>
                <Row>
                    <Col xs="10" sm="12" className="mx-auto section3-column1">
                        <p >You're wasting over 96% of your advertising budget</p>
       
                    </Col>
                </Row>
                <Row className="section3-row"  >
                   <Col xs="10" sm="8" className="mx-auto section3-column2" >
                       <p>The majority of advertisers don't convert their ad clicks because they can't create post-click landing page experiences as quickly as they do ads.</p>
       
                   </Col>
               </Row>
            </Container>
        </section>
         );

     }
 }

 export default Section3;