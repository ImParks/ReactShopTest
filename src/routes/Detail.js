import {Routes,Route,Link,useNavigate,Outlet, useParams} from 'react-router-dom';
import { useState } from 'react';
function DetailComponent(props){

  let {id} = useParams();
  id = parseInt(id, 10);
  let shoesInfo = props.shoes.filter(shoe => shoe.id === id)

    return(
      <>
      {(0 <= id && id < props.shoes.length)  ?(
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src={shoesInfo.img} width="100%" />
            </div>
            <div className="col-md-6">
              <h4 className="pt-5">{shoesInfo.title}</h4>
              <p>{shoesInfo.content}</p>
              <p>{shoesInfo.price}</p>
              <button className="btn btn-danger">주문하기</button> 
            </div>
          </div>
        </div> ):(<div>존재하지않는 상품입니다.</div>) }
        </>
  )
}

  export default DetailComponent;