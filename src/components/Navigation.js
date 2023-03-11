import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <Navbar bg="primary" variant="dark" sticky="top" className="py-3">
      <Container fluid>
        <Navbar.Brand className="justify-content-between">
          Solomon Santos | Full Stack Web Developer
        </Navbar.Brand>
        <Nav>
          <Nav.Link as={Link} to="/" className="text-light">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/projects" className="text-light">
            Projects
          </Nav.Link>
          <Nav.Link as={Link} to="/about" className="text-light">
            About
          </Nav.Link>
          <Nav.Link as={Link} to="/contact" className="text-light">
            Contact
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;
