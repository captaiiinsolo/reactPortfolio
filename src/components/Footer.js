import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Github, Twitter, Linkedin } from "react-bootstrap-icons";

function Footer() {
  return (
    <Navbar bg="light" variant="light" className="fixed-bottom">
      <Container className="justify-content-center" fluid>
        <Nav>
          <Nav.Link href="https://twitter.com/captaiiinsolo" target="_blank">
            <Twitter></Twitter>
          </Nav.Link>
          <Nav.Link href="https://github.com/captaiiinsolo" target="_blank">
            <Github></Github>
          </Nav.Link>
          <Nav.Link href="https://www.linkedin.com/in/solomon-santos/" target="_blank">
            <Linkedin></Linkedin>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Footer;
