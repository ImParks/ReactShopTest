import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";



function Cart(props){
let stock = useSelector((state)=>state.stock)

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
                    {stock.map(function(stockData,index){
                        return(
                            <tr>
                            <td>{index}</td>
                            <td>{stockData.name}</td>
                            <td>{stockData.count}</td>
                            <td><button>+</button><button>-</button></td>
                            </tr>
                            )
                        })

                    }
                </tbody>
            </Table>
        </div>
        </>
    )
}


export default Cart;



