
import './App.css';
import Home from './pages/home';
import { Routes, Route } from 'react-router-dom';
import Shop from "./pages/shop";
import Portfolio from "./pages/portfolio";
import Blog from "./pages/blog";
import Pages from "./pages/pages";
import Contact from "./pages/contact";
import About from './pages/about';

function App() {
  return (
    <div className="wrapper fixed__footer">
      <Routes>
        
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/portfolio" element={<Portfolio />}/>
          <Route exact path="/blog" element={<Blog />}/>
          <Route exact path="/shop" element={<Shop />}/>
          <Route exact path="/pages" element={<Pages />}/>
          <Route exact path="/contact" element={<Contact />}/>
          <Route exact path="/about" element={<About />}/>
       
      </Routes>
    </div>
  );
}

export default App;
