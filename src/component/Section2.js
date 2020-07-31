import React,{Component} from 'react';
import {Container,Row,Col} from 'react-bootstrap';

class Section2 extends Component{
    render(){
        return(
            <section id="section2">
    <Container className="section2-column1">
        <Row>
            <Col xs="3" md="2" className="my-auto section2-column2 ">
                <img src="//v.fastcdn.co/u/e6c956c2/45010055-0-37210836-0-verifone.svg" className="img-fluid" alt=""/>
            </Col>
            <Col xs="3" md="2" className="my-auto section2-column3">
                <img src="//v.fastcdn.co/u/e6c956c2/45010060-0-37210901-0-truecar.svg" className="img-fluid" alt=""/>
            </Col>
            <Col xs="3" md="2" className="my-auto section2-column4">
                <img src="//v.fastcdn.co/u/e6c956c2/45010070-0-37210936-0-ebay.svg" className="img-fluid" alt="" />
            </Col>
            <Col xs="3" md="2" className="my-auto section2-column5">
                <img src="//v.fastcdn.co/u/e6c956c2/45010080-0-37210946-0-verizon.svg" className="img-fluid" alt="" />
            </Col>
            <Col xs="3" md="2" className="my-auto section2-column6">
                <img src="//v.fastcdn.co/u/e6c956c2/45010090-0-37210966-0-hellofres.svg" className="img-fluid" alt="" />
            </Col>
            <Col xs="3" md="2" className="my-auto section2-column7">
                <img src="//v.fastcdn.co/u/e6c956c2/45010100-0-37210971-0-okta.svg" className="img-fluid" alt="" />
            </Col>
        </Row>
    </Container>
    </section>
        );
    }
}

export default Section2;