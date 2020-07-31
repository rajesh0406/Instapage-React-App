import React,{Component} from 'react';
import {Container,Row,Col} from 'react-bootstrap';
class Footer extends Component{
    render(){
        return(
            <section id="footer">
    <Container>
        <Row>
            <Col xs="10" sm="7" className="mx-auto">
                <Row>
                    <Col xs="12" className="footer-row">
                        <p >© Instapage Inc&nbsp; /&nbsp; About Us&nbsp; /&nbsp;Contact Us&nbsp; /&nbsp;GDPR&nbsp; /&nbsp;&nbsp;Privacy Policy&nbsp; /&nbsp;&nbsp;Terms of Service</p>
                    </Col>
                </Row>
            </Col>
        </Row>
    </Container>
</section> 
        );
    }
}
export default Footer;