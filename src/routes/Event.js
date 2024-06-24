import {Routes,Route,Link,useNavigate,Outlet} from 'react-router-dom';

function Event(){
    return(
        <div>
            <EventTitle/>
            <Routes>
                <Route path='one' element={<EventOne/>}/>

                <Route path='two' element={<EventTwo/>}/>
            </Routes>

        </div>
    )
}


function EventTitle(){
    return(
    <div>
    <h2>오늘의 이벤트</h2>
    <hr/>
    <Outlet></Outlet>
    </div>
    )
}

function EventOne(){
    return(
        <div>첫 주문시 양배추즙 서비스</div>
    )
}
function EventTwo(){
    return(
        <div>생일기념 쿠폰받기</div>
    )
}

export default Event;




