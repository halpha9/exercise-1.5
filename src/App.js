import "./App.scss";
import Header from "./components/Header";
import News from "./components/News";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Stock from "./components/Stock";
import Checkout from "./components/Checkout";
import Products from "./components/Products";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Nav />
                <Header />
                <Products />
                <News />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/checkout"
            element={
              <>
                <Nav />
                <Checkout />
              </>
            }
          ></Route>
          <Route
            path="/products"
            element={
              <>
                <Nav />
                <Stock />
              </>
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
