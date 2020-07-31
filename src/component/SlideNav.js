import React,{Component} from 'react';
import {Container,Row,Col} from 'react-bootstrap';

class SlideNav extends Component{
    render(){
        return(
            <section id="Navbar">
     <div id="navbar">
       <Container >
         <Row>
           <Col xs="3" sm="6">
             <div className="nav-column">
               <img src="//v.fastcdn.co/u/e6c956c2/45011710-0-Logo.svg"/>
             </div>
           </Col>
           <Col xs="3" sm="6">
             <div className="button3">
               <p>GET STARTED</p>
             </div>
           </Col>
         </Row>

       </Container>
       </div> 
    </section> 
        );
    }
}
export default SlideNav;