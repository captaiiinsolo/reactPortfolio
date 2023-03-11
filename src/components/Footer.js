import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Github, Twitter, Linkedin } from "react-bootstrap-icons";

function Footer() {
  return (
    <Navbar className="fixed-bottom py-3">
      <Container className="justify-content-center" fluid>
        <Nav>
          <Nav.Link href="https://twitter.com/captaiiinsolo" target="_blank">
            <Twitter className="text-danger" size={25}></Twitter>
          </Nav.Link>
          <Nav.Link href="https://github.com/captaiiinsolo" target="_blank">
            <Github className="text-danger" size={25}></Github>
          </Nav.Link>
          <Nav.Link href="https://www.linkedin.com/in/solomon-santos/" target="_blank">
            <Linkedin className="text-danger" size={25}></Linkedin>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Footer;
