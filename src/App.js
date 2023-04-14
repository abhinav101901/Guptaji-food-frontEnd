import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Login from './Component/Pages/LogIn';
import SingIn from './Component/Pages/SingIn';
import Navbar from './Component/Pages/Navbar';
import Home from './Component/Pages/Home';
import Order from './Component/Pages/Order';
import Cart from './Component/Pages/Cart';
import Menu from './Component/Pages/Menu';
import About from './Component/Pages/About';
import Contact from './Component/Pages/Contact';
import Footer from './Component/Pages/Footer';
import Otplogin from './Component/Pages/Otp-login'
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <header className="App-header">
      </header>
      <Navbar/>
      <Routes>
      < Route path="/" element={<Home/>} />
        < Route path="/Home" element={<Home/>} />
        < Route path="/LogIn" element={<Login/>} />
        < Route path="/SingIn" element={<SingIn/>} />
        < Route path="/Cart" element={<Cart/>} />
        < Route path="/Order" element={<Order/>} />
        < Route path="/About" element={<About/>} />
        < Route path="/Contact" element={<Contact/>} />
        < Route path='/getFood/:id' element={<Menu/>}/>
        < Route path='/Otplogin' element={<Otplogin/>}/>
      </Routes>
       <Footer/>
     </BrowserRouter> 
     
    </div>
  );
}

export default App;
