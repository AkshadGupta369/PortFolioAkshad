import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css'
import ParticleBg from './background/ParticleBg'
import HomePage from './Home/HomePage.jsx';
import Footer from "./Footer/Footer.jsx";
import Header from './Header/Header.jsx';

function App() {
  return (
    <>
    <div className='App'>
    <ParticleBg/>
    <div className='Appcontent'>
<Router>
<Header/>
  <Routes>
  <Route exact path="/" element={<HomePage/>}></Route>
  </Routes>
</Router>
    </div>
    <Footer/>
    </div>
    </>
  )
}

export default App
