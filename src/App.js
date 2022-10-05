import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Nopages from './pages/Nopages';
import About from './pages/About';
import Project from './pages/Project';
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './UI/NavBar';
import module from './pages/Home.module.css';
function App() {
  return (
    // <>
    // <Layout>

    // </Layout>
    // </>
    <BrowserRouter>
    <div className={module.magin}>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home/>} />
          {/* <Route path = "about" element={<About/>} />
          <Route path = "project" element={<Project/>} />
          <Route path = "contact" element={<Contact/>} /> */}
        </Route>
      </Routes>
    </div>
    
    </BrowserRouter>
  );
}

export default App;
