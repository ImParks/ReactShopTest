import {Routes,Route,Link,useNavigate,Outlet} from 'react-router-dom';
function Card(props){
  let url = "https://codingapple1.github.io/shop/shoes" + (props.shoesData.id + 1) + ".jpg"
    return(
    <div>
        <img src= {url} width="80%" onClick={()=>{props.navigate('/detail/' + props.shoesData.id)}}/>
        <h4>{props.shoesData.title}</h4>
        <p>{props.shoesData.price} 원</p>
    </div>
  )
}
export default Card;