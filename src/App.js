import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Navbar,Container,Nav,Row,Col } from 'react-bootstrap';
import { useState } from 'react';
import data from './data.js';


function App() {

  let [shoes,setShoes] = useState(data);
  return (
    <div className = "App">
      <Navbar bg='light' variant='light'>
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#features'>Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className='main-bg'> 
        
      </div>

      <div className='container'>
      <Row>
      {shoes.map(function(shoesData,index){
        return(
          <Col sm key={index}>
            <Databox shoesData={shoesData}/>
          </Col>
        )
      })}
      </Row>
      </div>

    </div>
  )
}

function Databox(props){
  return(
  <div>
      <img src={props.shoesData.img} width="80%"/>
      <h4>{props.shoesData.title}</h4>
      <p>{props.shoesData.price}</p>

  </div>
)
}

export default App;
