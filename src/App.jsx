import { Home } from './components/Home/Home'
import { Footer } from './components/Footer/Footer'
import {JdmBlock} from './components/JdmBlock/Jdm'
import {TechInfo} from './components/TechInfoBlock/TechInfo'
import {Routes, Route, Navigate} from 'react-router-dom'
function App() {
  return (
    <>
      <Routes>
        <Route path = '/' element = { <Navigate to="/Home" />} />  
        <Route path = '/Home' element = {<Home /> } />  
        <Route path = '/JdmCar' element = {<JdmBlock/>} />  
        <Route path = '/TechInfo' element = {<TechInfo/>} />  
      </Routes> 
      <Footer/>
    </>
  );
}

export default App;
