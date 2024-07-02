import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import { Suspense, lazy, useEffect, useState } from 'react';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import data from './data.js';
//import DetailComponent from './routes/Detail.js';
import About from './routes/About.js';
import Event from './routes/Event.js';
import Card from './routes/Card.js';
import Cart from './routes/Cart.js';
import axios from 'axios';
import { useQuery } from 'react-query';

const DetailComponent = lazy(()=> import('./routes/Detail.js'))


function App() {

  let [shoes, setShoes] = useState(data);

  let navigate = useNavigate();
  let [urlNumver, setUrlNumver] = useState(0);
  let [alert, setAlert] = useState(false);
  let [mag, setMag] = useState('');
  let [cart, SetCart] = useState([]);



  let axiosGet = () => {
    setAlert(true)
    setMag('로딩중');
    if (urlNumver >= 2) {
      setAlert(true);
      setMag('더는 추가할 상품이 없습니다.');
      return;
    }
    // axios 를 사용하여 서버에 get요청 post 요청을 하기위해선 get 부분을 post 로 변경하기만 하면됨.
    axios.get('https://codingapple1.github.io/shop/data' + (2 + urlNumver) + '.json')
      .then((data) => {
        let copy = [...shoes, ...data.data];
        setShoes(copy)
        setUrlNumver(urlNumver + 1)
        setAlert(false)
        setMag('');
      })
      .catch(() => {
        setMag('정보 불러오기 실패');
        setAlert(true)
      })

    //promise.all([axios.get('url'),axios.get('/url2')])를 사용하면 여러개의 서버요청을 할수있다. 이 부분을 요청하기위해선
    //.then 처럼 기본 get이나 post 때 사용하는 방식으로 사용하면된다.
    // 이 부분을 사용하는 이유는 두가지 모두 요청이 성공했을때 실행하게 하려면 이 방법을 사용해야함.

    // js 기본 서버요청 fetch() 사용할땐 json 을 변환하는 과정이 필요함.
  }






  // mount, update 시에 작동
  useEffect(() => {
    let timer = setTimeout(() => {
      setAlert(false)
      setMag('');
    }, 5000);

    return () => {
      clearTimeout(timer);
    }

    //조건추가 [] 가 되어있으면 1회용, [] 안에 변수가 들어있으면 그 변수가 변경이 될때
  }, [alert])

  useEffect(() => {
    if (localStorage.getItem('RecentlyProduct') === null) {
      localStorage.setItem('RecentlyProduct', '[]')
    }
  }, [])

  return (
    <div className="App">

<Suspense fallback={<div>로딩</div>}>
      <Routes>
        <Route path='/' element={<TopBar navigate={navigate} />} >

          <Route path='' element={<HomeComponent shoes={shoes} navigate={navigate} axiosGet={axiosGet} alert={alert} mag={mag} />} />

          <Route path='/detail/:id' element={<DetailComponent shoes={shoes} cart={cart} />} />

          <Route path='/about/*' element={<About />} />

          <Route path='/event/*' element={<Event />} />

          <Route path='/cart' element={<Cart />} />

          <Route path='*' element={<div>없는 페이지입니다.</div>} />
        </Route>
      </Routes>
      </Suspense>

    </div>
  )
}

function TopBar(props) {

  let result = useQuery('name',()=>
  axios.get('https://codingapple1.github.io/userdata.json').then((a)=>
  a.data
  )
)
//데이터 출력
//result.data
//로딩중일떄 true
//result.isLoading
//에러가 났을때 이게 true
//result.error


  return (
    <div>
      <Navbar bg='light' variant='light'>
        <Container>
          <Navbar.Brand onClick={() => { props.navigate('/') }}>ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { props.navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={() => { props.navigate('/event') }}>Event</Nav.Link>
            <Nav.Link onClick={() => { props.navigate('/cart') }}>cart</Nav.Link>
          </Nav>
          <Nav className='ms-auto'>
            {result.isLoading ? '로딩중' : (result.error ? '에러남' : result.data.name)}
          </Nav>
        </Container>
      </Navbar>
      <Outlet></Outlet>
    </div>
  )
}




function HomeComponent(props) {
  let [recentlyProduct, setRecentlyProduct] = useState([])
  useEffect(() => {
    if (JSON.parse(localStorage.getItem('RecentlyProduct')) != null) {
      setRecentlyProduct(JSON.parse(localStorage.getItem('RecentlyProduct')))
    } else {
      localStorage.setItem('RecentlyProduct', '[]')
    }
  }, [])


  return (
    <div>
      <div className='main'>
        <div className='main-bg'>
        </div>
        <div className='main-right'>
          {recentlyProduct.map((product, index) =>
            <div className='main-right-box' key={index}>
              <div className='productImg'>
                <img src={"https://codingapple1.github.io/shop/shoes" + (product.id + 1) + ".jpg"} />
              </div>
              <div className='productTitle'>{product.title}</div>
            </div>
          )
          }

        </div>
      </div>
      <div className='container'>
        <Row>
          {props.shoes.map((shoesData, index) =>

            <Col sm key={index}>
              <Card shoesData={shoesData} navigate={props.navigate} />
            </Col>
          )
          }
        </Row>
      </div>
      {props.alert && (
        <div>{props.mag}</div>
      )}
      <button onClick={() => { props.axiosGet() }}>버튼</button>
    </div>

  )
}



export default App;
