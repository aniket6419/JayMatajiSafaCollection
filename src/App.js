import Navbar from "./component/Navbar";
import About from './component/About';
import Services from './component/Services';
import{
  HashRouter as Router,
  Routes,
  Route,
}from 'react-router-dom';
import Footer from "./component/Footer";
import logo from "./component/images/logo.png"

function App() {
    
  return (
    <>
    <Router>
    <Navbar img={logo}/>
    <div className="container my-4">
      <Routes>
         <Route exact path='/' element={<About/>}/>
         <Route exact path='/Portfolio' element={<Services heading="Jay Mataji Safa Collection By AniketSinh"/>}/>        
      </Routes>
    </div>
    </Router>
    <Footer/>
    
    </>
  );
}

export default App;
