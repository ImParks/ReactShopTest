import {Routes,Route,Link,useNavigate,Outlet} from 'react-router-dom';

function About(){
    return(
    <div>
        <AboutTitle/>
        <Routes>
            <Route path='member' element={<Memver/>}/>

            <Route path='location' element={<Location/>}/>
        </Routes>

    </div>
    )
  }

  function AboutTitle(){
   return(
    <div>
    <h4>회사정보</h4>
    <Outlet></Outlet>
    </div>
  )
  }

  function Memver(){
    return(
        <>
            <div>맴버임</div>
        </>
    )
  }


  function Location(){
    return(
        <div>location</div>
    )
  }



export default About;