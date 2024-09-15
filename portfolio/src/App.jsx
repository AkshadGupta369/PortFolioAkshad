import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css'
import ParticleBg from './background/ParticleBg'
import HomePage from './Home/HomePage.jsx';



function App() {
  return (
    <>
    <div className='App' style={{height:"100vh",width:"100%"}}>
    <ParticleBg/>
    <div className='Appcontent'>
<Router>
  <Routes>
  <Route exact path="/" element={<HomePage/>}></Route>
  </Routes>
</Router>
    </div>
    </div>

    {/* <h1 style={{color:"white",zIndex:2,position:'relative'}}>Hi my name is Akshad</h1> */}
    </>
  )
}

export default App
