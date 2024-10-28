import "./App.css";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Products from "./Components/Products/Products";

function App() {
  return (
    <div className="main-container">
      <Router>
        <div className="App">
          <nav className="navbar">
            <ul className="nav-list">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/Jewelry" className="nav-link">Jewelry</Link>
              </li>
              <li className="nav-item">
                <Link to="/Electronic" className="nav-link">Electronic</Link>
              </li>
            </ul>
          </nav>
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Jewelry" element={<Products type="Jewelery" />} />
            <Route path="/Electronic" element={<Products type="Eelectronic" />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
