import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { plusStock ,minusStock} from "../store/stokSlice.js"


function Cart(props){
let stock = useSelector((state)=>state.stock)
let dispatch = useDispatch()
    return(
        <>
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {stock.map((stockData,index)=>
                        <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{stockData.name}</td>
                        <td>{stockData.count}</td>
                        <td><button onClick={()=> dispatch(plusStock(stockData.id))}>+</button><button onClick={()=> dispatch(minusStock(stockData.id))}>-</button></td>
                        </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>
        </>
    )
}



export default Cart;



