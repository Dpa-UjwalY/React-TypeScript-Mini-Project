import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { About } from "./pages/About";
import { NavBar } from "./components/Navbar";
import { Cart } from "./pages/Cart";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import "./App.css"


function App() {
  return (
    <ShoppingCartProvider>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  );
}

export default App;
