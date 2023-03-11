import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/custom.min.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";


import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
   <div className="App">
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          {/* <Navigate to="/" /> */}
        </Routes>
      </Router>
    </>

    <Footer></Footer>
   </div>
   
  );
}

export default App;
