import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Blog from './pages/blog/Blog';
import About from './pages/about/About';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Footer from './components/footer/Footer';
import Contact from './pages/contact/Contact';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Blog' element={<Blog />} />
        <Route path='/About' element={<About />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
