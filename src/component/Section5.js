import React,{Component} from 'react';
import {Container,Col,Row} from 'react-bootstrap';

class Section5 extends Component{
    render(){
        return(
            <section id="section5">
    <Container>
        <Row >
            <Col xs="10" sm="8" className="mx-auto section5-column1">
                <p >Today’s top advertisers rise above rudimentary landing page builders</p>

            </Col>
        </Row>
        <Row className="section5-row">
           <Col xs="10" sm="7" className="mx-auto section5-column2" >
               <p>The market is flooded with ordinary enterprise landing page builders. However, there’s only one Advertising Conversion Cloud™ that uses conversion intelligence to automate the creation of personalized post-click experiences so that you can dramatically increase your ROI and multiply your conversion rate by as much as 4.2x.</p>

           </Col>
        </Row>
    </Container>
</section>
        );
    }
}
 export default Section5;