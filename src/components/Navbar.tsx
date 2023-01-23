import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { BsCart4 } from "react-icons/bs"
import { useState } from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import "../App.css"


export function NavBar() {

  const { openCart, cartQuant } = useShoppingCart()

  const [navv, setNavv] = useState(false);
  const changeBackground = () =>{
    if(window.scrollY >= 0){
      setNavv(true);
    }else{
      setNavv(false);
    }
  }
  window.addEventListener('scroll', changeBackground);
  return (
    <Navbar className={navv ? 'navv active' : 'navv'}  fixed="top"  collapseOnSelect bg="dark" expand="lg" >
      <Container className="app" >
          <Navbar.Brand to="/" as={NavLink} className="text-light ">
            <h1>Store</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="py-2" id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink} className="text-light">
            Home
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink} className="text-light">
            Store
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink} className="text-light">
            About
          </Nav.Link>
        </Nav>
          <Nav.Link  to="/cart" as={NavLink} className="text-light" style={{position:"relative", width: "4rem" }}>
            <BsCart4 onClick={openCart} style={{ width: "2rem", height: "2rem"}} />
            { cartQuant ? <div className="rounded-circle bg-warning d-flex justify-content-center align-items-center cart-quant" >{cartQuant}</div> : null}
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
