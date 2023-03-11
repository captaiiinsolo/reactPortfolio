import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

function Footer() {
    return (
        <Navbar bg="dark" variant="dark" sticky='top'>
        <Container className="justify-content-center" fluid>
            <Nav >
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#projects">Projects</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
    );
}

export default Footer;
