import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { BsCart4 } from "react-icons/bs"
import { useState } from "react";
export function NavBar() {

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
      <Container >
          <Navbar.Brand to="/" as={NavLink} className="text-light ">
            <h1>HederaStore</h1>
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
            <BsCart4 style={{ width: "2rem", height: "2rem"}} />
            <div className="rounded-circle bg-warning d-flex justify-content-center align-items-center" style={{width: "1.2rem", height: "1.2rem", position:"absolute",right:0, transform: "translate(-55%, -45%"}}>3</div>
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
