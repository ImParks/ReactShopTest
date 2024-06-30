import {useParams} from 'react-router-dom';
import { useEffect, useState } from 'react';
import {Nav} from 'react-bootstrap';
import styled from 'styled-components';
import {addStock} from '../store/stokSlice.js'
import { useDispatch } from 'react-redux';





function DetailComponent(props){

  let {id} = useParams();
  id = parseInt(id, 10);
  let shoesInfo = props.shoes.find(shoe => shoe.id === id)



  let [alert,setAlert] = useState(true);
  let [intAlert,setIntAlert] = useState(false);
  let [time,setTime] = useState(new Date());
  let [textBox,setTextBox] = useState(null);
  let [alert2,setAlert2] = useState(false);
  let [tap,setTap] = useState(0);
  let [tage,setTage] = useState(0);
  let url = "https://codingapple1.github.io/shop/shoes" + (id+1) + ".jpg"
  let dispatch = useDispatch();
  // mount, update 시에 작동
  useEffect(()=>{
    let timer = setTimeout(()=>{setTime(new Date())},1000);
    //처음 mount 일땐 작동하지않고 update 또는 unMount 시에 작동
    return()=>{
      console.log(1);
      clearTimeout(timer);
    }
   //조건추가 [] 가 되어있으면 1회용, [] 안에 변수가 들어있으면 그 변수가 변경이 될때
  },[time])

  useEffect(()=>{

    if(isNaN(textBox)){
      setAlert2(true)
      return
    }
    setAlert2(false)

    return()=>{

    }
  },[textBox])
  
  useEffect(()=>{

    let a = setTimeout(()=>{setTage('end')},100)
    let RecentlyProduct = JSON.parse(localStorage.getItem('RecentlyProduct'))
    
    if(RecentlyProduct.findIndex(x => x.id === shoesInfo.id) === -1){
    localStorage.setItem('RecentlyProduct',JSON.stringify([...RecentlyProduct,shoesInfo]))
  }

    return()=>{
      clearTimeout(a);
      setTage('');
    }
  },[])

  useEffect(()=>{

    let a = setTimeout(()=>{setAlert(false)},2000);
    return()=>{
      clearTimeout(a);

    }
  },[])
  //숙제 1번 문자 입력시 팝업창



    return(
      <>
      {(0 <= id && id < props.shoes.length)  ?(
        <div className="container">
          <div className={'start ' + tage}>
          {time.toString()}
          {alert &&(
          <div className="alert alert-warning">
            2초이내 구매시 할인
          </div>
          )
            }
          <div className="row">
            <div className="col-md-6">
              <img src={url} width="100%" />
            </div>
            <div className="col-md-6">
              {alert2 &&(
              <div className="alert alert-warning">
                <h4>경고 : 숫자만 입력하세요</h4>
              </div>
              )}
              <input type='text' onChange={(e) => {setTextBox(e.target.value)}    }/>
              <h4 className="pt-5">{shoesInfo.title}</h4>
              <p>{shoesInfo.content}</p>
              <p>{shoesInfo.price}원</p>
              <button className="btn btn-danger" onClick={()=>dispatch(addStock({shoesInfo}))}>주문하기</button> 
            </div>
          </div>
          <Nav variant='tabs' defaultActiveKey="link0">
            <Nav.Item>
              <Nav.Link eventKey="link0" onClick={()=>{setTap(0)}}>버튼0</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link1" onClick={()=>{setTap(1)}}>버튼1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link2" onClick={()=>{setTap(2)}}>버튼2</Nav.Link>
            </Nav.Item>
        </Nav>
        <TapComponent tap={tap}/>
        </div>
        </div> ):(<div>존재하지않는 상품입니다.</div>) }
        </>
  )
}

function TapComponent({tap}){
let [name,setName] = useState('')

  useEffect(()=>{
    let a = setTimeout(()=>{setName('end')},100)
    
    return()=>{
      clearTimeout(a);
      setName('');
    }
  },[tap])

return <div className={'start ' + name}>
  { [<div >내용0</div>,<div>내용1</div>,<div>내용2</div>][tap]}
</div>
}

  export default DetailComponent;