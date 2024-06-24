import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Navbar,Container,Nav,Row,Col } from 'react-bootstrap';
import { useState } from 'react';
import {Routes,Route,Link,useNavigate,Outlet} from 'react-router-dom';
import data from './data.js';
import DetailComponent from './routes/Detail.js';
import About from './routes/About.js';
import Event from './routes/Event.js';
import Cart from './routes/Cart.js';

function App() {

  let [shoes,setShoes] = useState(data);

  let navigate = useNavigate();

  return (
    <div className = "App">


      <Routes>
        <Route path='/' element={<TopBar navigate={navigate}/>} >

          <Route path='' element={<HomeComponent shoes={shoes} navigate={navigate}/>}/>

          <Route path='/detail/:id' element={<DetailComponent shoes={shoes}/>}/> 

          <Route path='/about/*' element={<About />} />

          <Route path='/event/*' element={<Event/>}/>

          <Route path='cart' element={<Cart/>}/>

          <Route path='*' element={<div>없는 페이지입니다.</div>}/>
        </Route>
      </Routes>

    </div>
  )
}

function TopBar(props){
  return(
    <div>
      <Navbar bg='light' variant='light'>
        <Container>
          <Navbar.Brand onClick={()=>{props.navigate('/')}}>ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{props.navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{props.navigate('/detail')}}>Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet></Outlet>
    </div>
  )
}




function HomeComponent(props){
  return(
    <div>
    <div className='main-bg'> 
    </div>
    <div className='container'>
      <Row>
        {props.shoes.map(function(shoesData,index){
          return(
          <Col sm key={index}>
            <Cart shoesData={shoesData} navigate={props.navigate}/>
          </Col>
          )})}
      </Row>
      </div>
    </div>

  )
}



export default App;
