import React from 'react';
import'./App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Contact from './Components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className='ee'>
      <Row>
        <Router>

        <Col sm={2} className='sa'>
      <Header/>
      </Col>
      <Col sm={10} className='sai2'>
<Routes>
      <Route path='/ReactWeb' exact Component={Home}/>
      <Route path='/About' exact Component={About}/>
      <Route path='/Services' exact Component={Services}/>
      <Route path='/Contact' exact Component={Contact}/>
</Routes>   
      </Col>
      </Router>
      </Row>
    </div>
  );
}

export default App;
