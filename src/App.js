import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row,Col} from 'react-bootstrap';
import Section1 from './component/Section1';
import Section2 from './component/Section2';
import Section3 from './component/Section3';
import Section4 from './component/Section4';
import Section5 from './component/Section5';
import Section6to10 from './component/Section6to10';
import Section11 from './component/Section11';
import Section12to14 from './component/Section12to14';
import Section15 from './component/Section15';
import Section16to18 from './component/Section16to18';
import Footer from './component/Footer';
import SlideNav from './component/SlideNav';
function App() {
 
   return (
     <div id="main">
      <Section1/>    
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6to10/>
      <Section11/>
      <Section12to14/> 
      <Section15/>
      <Section16to18/>
      <Footer/>
      <SlideNav/>
     </div>
   
  );
}

export default App;

