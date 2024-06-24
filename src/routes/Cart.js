import {Routes,Route,Link,useNavigate,Outlet} from 'react-router-dom';
function Cart(props){
    return(
    <div>
        <img src={props.shoesData.img} width="80%" onClick={()=>{props.navigate('/detail/' + props.shoesData.id)}}/>
        <h4>{props.shoesData.title}</h4>
        <p>{props.shoesData.price}</p>
    </div>
  )
}
export default Cart;