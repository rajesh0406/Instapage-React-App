import React,{Component} from 'react';
import {Container,Col,Row} from 'react-bootstrap';
import Section1 from './Section1';

class Section11 extends Component{
    render(){
        return(
            <section id="section11">
    <Container>
        <Row>
            <Col xs="10" sm="8"className ="mx-auto section3-column1">
                <p >It’s more than a builder</p>

            </Col>
        </Row>
        <Row className="section11-row"  >
           <Col xs="10" sm="7" className="mx-auto section3-column2" >
               <p >Instapage delivers everything you need to transform clicks into customers.</p>
          </Col>
        </Row>
    </Container>
</section>
        );
    }
}
export default Section11;